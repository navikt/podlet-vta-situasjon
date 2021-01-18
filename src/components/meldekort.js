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
  const { meldekortInfo, meldekortHistorie } = props;
  console.log(meldekortHistorie);
  if (!meldekortInfo) return null;
  if (meldekortInfo && meldekortInfo.meldekortbruker !== true) return null;

  return (
    <>
      <Systemtittel>Meldekort</Systemtittel>
      <MeldekortAdvarsel meldekortInfo={meldekortInfo} />
    </>
  );
}

export default Meldekort;
