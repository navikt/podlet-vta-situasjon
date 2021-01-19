import React from "react";
import { AlertStripeAdvarsel } from "nav-frontend-alertstriper";

function MeldekortAdvarsel(props) {
  const { dagerTilFrist } = props;

  if (!dagerTilFrist) return null;

  if (dagerTilFrist < 0) return null;

  return (
    <AlertStripeAdvarsel>
      Dersom du ikke sender inn meldekortet innen {dagerTilFrist} dager vil du ikke lenger være registrert som
      arbeidssøker.
    </AlertStripeAdvarsel>
  );
}

export default MeldekortAdvarsel;
