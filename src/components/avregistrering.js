import React, { useState } from "react";
import Lenke from "nav-frontend-lenker";
import { Undertekst } from "nav-frontend-typografi";

function Info() {
  return <div>Da skal du høre her, min venn</div>;
}

function Avregistrering(props) {
  const [visInfo, setVisinfo] = useState(false);
  const { oppfolging } = props;

  if (!oppfolging) return null;

  if ((oppfolging && oppfolging.formidlingsgruppe !== "ARBS") || (oppfolging && oppfolging.underOppfolging !== true))
    return null;

  const handleToggleInfo = (event) => {
    event.preventDefault();
    const info = visInfo;
    setVisinfo(!info);
  };

  return (
    <div>
      <Undertekst>
        <Lenke className={"avregistreringslenke"} href="#" onClick={handleToggleInfo}>
          Jeg ønsker ikke lenger å være registrert arbeidssøker hos Nav
        </Lenke>
      </Undertekst>
      {visInfo && <Info />}
    </div>
  );
}

export default Avregistrering;
