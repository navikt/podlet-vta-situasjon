import React, { useState } from "react";
import Lenke from "nav-frontend-lenker";
import { underOppfolgingUrl } from "../url";

function Info() {
  return <div>Da skal du høre her, min venn</div>;
}

function Avregistrering(props) {
  const [visInfo, setVisinfo] = useState(false);
  const { oppfolging } = props;
  const { underOppfolging } = oppfolging;

  if (!oppfolging || !underOppfolging) return null;

  const handleToggleInfo = (event) => {
    event.preventDefault();
    const info = visInfo;
    setVisinfo(!info);
  };

  return (
    <div>
      <Lenke href="#" onClick={handleToggleInfo}>
        Jeg ønsker ikke lengre å være registrert
      </Lenke>
      {visInfo && <Info />}
    </div>
  );
}

export default Avregistrering;
