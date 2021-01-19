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
import dagerTilSisteFrist from "../lib/meldekort-dager-til-siste-frist";

function Meldekort(props) {
  const { meldekortInfo, meldekortHistorie } = props;
  if (!meldekortInfo) return null;
  if (meldekortInfo && meldekortInfo.meldekortbruker !== true) return null;
  const iDag = new Date(new Date().toISOString().substr(0, 10));
  const dagerTilFrist = dagerTilSisteFrist(iDag, meldekortHistorie);

  return (
    <>
      <Systemtittel>Meldekort</Systemtittel>
      <MeldekortAdvarsel dagerTilFrist={dagerTilFrist} />
    </>
  );
}

export default Meldekort;
