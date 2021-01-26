/**
 * Viser faresignal siste uken - viktigst
 *
 * dato for neste, dato for frist
 *
 * link til meldekort
 */

import React from "react";
import MeldekortAdvarsel from "./meldekort-advarsel";
import { Normaltekst, Systemtittel, Undertekst } from "nav-frontend-typografi";
import hentFrister from "../lib/meldekort-hent-frister";
import { ReactComponent as MeldekortOK } from "./success.svg";

function Meldekort(props) {
  const { meldekortInfo, meldekortHistorie } = props;

  if (!meldekortInfo) return null;
  if (meldekortInfo && meldekortInfo.meldekortbruker !== true) return null;

  const iDag = new Date(new Date().toISOString().substr(0, 10));
  const fristerMedMeldekort = hentFrister(iDag, meldekortHistorie);

  return (
    <>
      {fristerMedMeldekort ? (
        <MeldekortAdvarsel frister={fristerMedMeldekort} />
      ) : (
        <div>
          <Normaltekst> Du har sendt inn siste meldekort</Normaltekst>
          <MeldekortOK />
        </div>
      )}
      <i>
        <Undertekst id={"opplysninger-meldeplikt"}>
          Det er innsending av meldekortet som opprettholder både statusen som arbeidssøker, samt brukes til å beregne
          utbetalingen av dagpenger.
        </Undertekst>
      </i>
    </>
  );
}

export default Meldekort;
