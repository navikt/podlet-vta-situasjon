import React from "react";
import { Sidetittel } from "nav-frontend-typografi";

function Navn(props) {
  const { navn } = props;

  if (!navn) return null;

  return <Sidetittel>{navn}</Sidetittel>;
}

export default Navn;
