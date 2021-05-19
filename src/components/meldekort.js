/**
 * Viser faresignal siste uken - viktigst
 *
 * dato for neste, dato for frist
 *
 * link til meldekort
 */

import React from "react";
import MeldekortAdvarsel from "./meldekort-advarsel";
import { Normaltekst, Undertekst } from "nav-frontend-typografi";
import { datoMedUkedag, datoUtenTid, plussDager } from "../utils/date-utils";
import { hentIDag } from "../utils/chrono";
import { beregnDagerEtterFastsattMeldedag, beregnDagerTilInaktivering } from "../utils/meldekort-utils";

function Meldekort(props) {
  const { meldekortData, oppfolgingData, registreringsData } = props;

  if (!kanViseMeldekortStatus(meldekortData, oppfolgingData, registreringsData)) {
    return null;
  }

  const iDag = datoUtenTid(hentIDag().toISOString());
  const dagerEtterFastsattMeldedag = beregnDagerEtterFastsattMeldedag(iDag, meldekortData);

  if (dagerEtterFastsattMeldedag === null) return null;

  const etterFoersteMeldedag = dagerEtterFastsattMeldedag > 0;
  const dagerTilInaktivering = beregnDagerTilInaktivering(dagerEtterFastsattMeldedag);
  const inaktiveringsDato = plussDager(iDag, dagerTilInaktivering);

  return (
    <div className={"onboarding-meldekortvarsel-container"}>
      {etterFoersteMeldedag ? (
        <MeldekortAdvarsel
          dagerEtterFastsattMeldedag={dagerEtterFastsattMeldedag}
          rettighetsgruppe={oppfolgingData.rettighetsgruppe}
        />
      ) : (
        <>
          <Normaltekst className={"blokk-xs"}>Du kan nå sende inn meldekort.</Normaltekst>
          <Normaltekst>{`Fristen er ${datoMedUkedag(inaktiveringsDato)}, klokken 23.00.`}</Normaltekst>
        </>
      )}
    </div>
  );
}

function kanViseMeldekortStatus(meldekortData, oppfolgingData, registreringData) {
  const meldekortliste = meldekortData?.meldekort ?? [];
  const harMeldekort = meldekortliste.length > 0;
  if (!harMeldekort) return false;

  const erAAP = oppfolgingData.rettighetsgruppe === "AAP";
  const harDagpengerEllerArbeidssokerMeldekort =
    meldekortliste.filter((meldekort) => ["DAGP", "ARBS"].includes(meldekort.meldegruppe ?? "NULL")).length > 0;

  const brukerregistreringData = registreringData?.registrering ?? null;

  const kanViseKomponent =
    !erAAP &&
    harDagpengerEllerArbeidssokerMeldekort &&
    erStandardInnsatsgruppe({ brukerregistreringData, oppfolgingData }) &&
    !oppfolgingData.kanReaktiveres;

  console.log(kanViseKomponent);

  return kanViseKomponent;
}

function erStandardInnsatsgruppe(data) {
  const { brukerregistreringData, oppfolgingData } = data;
  const foreslattInnsatsgruppe = brukerregistreringData.profilering.innsatsgruppe;
  const { servicegruppe, formidlingsgruppe } = oppfolgingData;

  if (servicegruppe === "IVURD" && formidlingsgruppe === "ARBS" && foreslattInnsatsgruppe === "STANDARD_INNSATS") {
    return true;
  }
  if (servicegruppe === "IKVAL" && formidlingsgruppe === "ARBS") {
    return true;
  }

  return false;
}

export default Meldekort;
