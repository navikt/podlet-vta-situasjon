import React from "react";
import { Normaltekst, Systemtittel, Undertittel } from "nav-frontend-typografi";

function Oppfolging(props) {
  const { oppfolging } = props;

  if (!oppfolging) return null;

  const { formidlingsgruppe, rettighetsgruppe } = oppfolging;
  return (
    <>
      <Undertittel>
        Du er {formidlingsgruppe === "ARBS" ? "registrert" : "ikke registrert"} som arbeidssøker hos NAV
        <br />
        {rettighetsgruppe === "IYT" ? "Du har fått innvilget dagpenger" : ""}
      </Undertittel>
    </>
  );
}

export default Oppfolging;
