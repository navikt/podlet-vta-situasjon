import React from "react";
import { Sidetittel } from "nav-frontend-typografi";

interface Props {
  navn: string | undefined;
}

function Navn(props: Props) {
  const { navn } = props;

  if (!navn) return null;

  return <Sidetittel>{navn}</Sidetittel>;
}

export default Navn;
