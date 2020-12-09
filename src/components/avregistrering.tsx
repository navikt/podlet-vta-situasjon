import React, { useState } from "react";
import Lenke from "nav-frontend-lenker";

interface Props {
  underOppfolging: boolean;
}

function Info() {
  return <div>Da skal du høre her, min venn</div>;
}

function Avregistrering(props: Props) {
  const [visInfo, setVisinfo] = useState(false);
  const { underOppfolging } = props;

  if (!underOppfolging) return null;

  const handleToggleInfo = (event: any) => {
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
