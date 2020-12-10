import React from "react";
import { Systemtittel } from "nav-frontend-typografi";

function Oppfolging(props) {
  const { oppfolging } = props;

  if (!oppfolging) return null;

  const { formidlingsgruppe } = oppfolging;
  return <Systemtittel>Du er {formidlingsgruppe}</Systemtittel>;
}

export default Oppfolging;
