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

function MeldekortAdvarsel({ frister }) {
  if (!frister) return null;

  const { dagerTilInaktivering } = frister;

  if (dagerTilInaktivering < 0) return null;

  return <>{dagerTilInaktivering > 0 ? <HasterLitt dager={dagerTilInaktivering} /> : <HasterVeldig />}</>;
}

export default MeldekortAdvarsel;
