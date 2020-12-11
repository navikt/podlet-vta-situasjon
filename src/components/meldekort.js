/**
 * Viser faresignal siste uken - viktigst
 *
 * dato for neste, dato for frist
 *
 * link til meldekort
 */

import React from "react";
import MeldekortAdvarsel from "./meldekort-advarsel";
import { Systemtittel } from "nav-frontend-typografi";

function Meldekort(props) {
  const { meldekort } = props;

  if (!meldekort) return null;
  if (meldekort && meldekort.meldekortbruker !== true) return null;

  return (
    <>
      <Systemtittel>Meldekort</Systemtittel>
      <MeldekortAdvarsel meldekort={meldekort} />
    </>
  );
}

export default Meldekort;
