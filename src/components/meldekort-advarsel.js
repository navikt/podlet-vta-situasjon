import React from "react";
import { Element, Normaltekst } from "nav-frontend-typografi";
import { beregnDagerTilInaktivering } from "../utils/meldekort-utils";
import { hentIDag } from "../utils/chrono";
import { datoMedUkedag, plussDager } from "../utils/date-utils";

function MeldekortAdvarsel({ dagerEtterFastsattMeldedag, rettighetsgruppe }) {
  if (dagerEtterFastsattMeldedag === null) return null;

  const dagerTilInaktivering = beregnDagerTilInaktivering(dagerEtterFastsattMeldedag);
  // Viser strenger melding fra dag 3 (torsdag)
  const tillegg = dagerEtterFastsattMeldedag > 2 ? <LittStrengereVarsel rettighetsgruppe={rettighetsgruppe} /> : null;
  const iDag = hentIDag();
  const inaktiveringsDato = plussDager(iDag, dagerTilInaktivering);

  return (
    <>
      {dagerTilInaktivering <= 0 ? (
        <Normaltekst>Siste frist for innsending av meldekortet er i kveld klokken 23.00</Normaltekst>
      ) : (
        <>
          <Normaltekst>
            Du har{" "}
            <b>
              {dagerTilInaktivering} {dagerTilInaktivering === 0 || dagerTilInaktivering > 1 ? "dager" : "dag"}{" "}
            </b>
            på å sende inn meldekort.
          </Normaltekst>
          <Normaltekst>Fristen er {datoMedUkedag(inaktiveringsDato)}, klokken 23.00.</Normaltekst>
        </>
      )}
      {tillegg}
    </>
  );
}

const LittStrengereVarsel = ({ rettighetsgruppe }) => {
  const dagpengerKonsekvensMelding = {
    DAGP: "utbetaling av dagpenger stoppes",
    IYT: "en eventuell søknad om dagpenger kan bli avslått",
  };

  return (
    <div className={"strenger-varsel"}>
      <Element>Dersom du ikke sender inn meldekort vil</Element>

      <ul className={"konsekvenser"}>
        <li>
          <Normaltekst>du ikke lenger være registrert som arbeidssøker</Normaltekst>
        </li>
        {["DAGP", "IYT"].includes(rettighetsgruppe) && (
          <li>
            <Normaltekst>{dagpengerKonsekvensMelding[rettighetsgruppe]}</Normaltekst>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MeldekortAdvarsel;
