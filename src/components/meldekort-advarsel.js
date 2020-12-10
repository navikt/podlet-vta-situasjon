import React from "react";
import { AlertStripeAdvarsel } from "nav-frontend-alertstriper";

function MeldekortAdvarsel(props) {
  return (
    <AlertStripeAdvarsel>
      Dersom du ikke sender inn meldekortet innen dato vil du ikke lenger være registrert som arbeidssøker.
    </AlertStripeAdvarsel>
  );
}

export default MeldekortAdvarsel;
