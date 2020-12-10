import React from "react";

function Meldekort(props) {
  const { meldekort } = props;

  if (!meldekort) return null;

  return <>...dersom du ikke sender meldekort innen 2 dager vil du ikke lenger være registrert som arbeidssøker</>;
}

export default Meldekort;
