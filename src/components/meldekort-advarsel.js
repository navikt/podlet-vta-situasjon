import React from "react";
import { AlertStripeAdvarsel } from "nav-frontend-alertstriper";

const HasterLitt = ({ dager }) => {
  return (
    <AlertStripeAdvarsel>
      Dersom du ikke sender inn meldekortet innen {dager} {dager > 1 ? "dager" : "dag"} vil du ikke lenger være
      registrert som arbeidssøker.
    </AlertStripeAdvarsel>
  );
};

const HasterVeldig = () => {
  return (
    <AlertStripeAdvarsel>
      Dersom du ikke sender inn meldekortet nå vil du ikke lenger være registrert som arbeidssøker.
    </AlertStripeAdvarsel>
  );
};

function MeldekortAdvarsel(props) {
  const { dagerTilFrist } = props;

  if (dagerTilFrist === null || typeof dagerTilFrist === "undefined") return null;

  if (dagerTilFrist < 0) return null;

  return <>{dagerTilFrist > 0 ? <HasterLitt dager={dagerTilFrist} /> : <HasterVeldig />}</>;
}

export default MeldekortAdvarsel;
