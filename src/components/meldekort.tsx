import React from "react";

interface Props {
  meldekort?: string;
}

function Meldekort(props: Props) {
  const { meldekort } = props;

  if (!meldekort) return null;

  return <>...dersom du ikke sender meldekort innen 2 dager vil du ikke lenger være registrert som arbeidssøker</>;
}

export default Meldekort;
