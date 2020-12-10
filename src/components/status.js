import React from "react";
import { Systemtittel } from "nav-frontend-typografi";

function Status(props) {
  const { status } = props;

  if (!status) return null;

  return <Systemtittel>Du er {status}</Systemtittel>;
}

export default Status;
