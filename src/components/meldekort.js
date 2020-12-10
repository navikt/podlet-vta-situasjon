/**
 * Viser faresignal siste uken - viktigst
 *
 * dato for neste, dato for frist
 *
 * link til meldekort
 */

import React from "react";
import MeldekortAdvarsel from "./meldekort-advarsel";

function Meldekort(props) {
  const { meldekort } = props;

  if (!meldekort || !meldekort.meldekortbruker) return null;

  return (
    <>
      <MeldekortAdvarsel />
    </>
  );
}

export default Meldekort;
