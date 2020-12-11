import React from "react";
import { AlertStripeAdvarsel } from "nav-frontend-alertstriper";

function MeldekortAdvarsel(props) {
  const { meldekort } = props;

  if (!meldekort) return null;
  if (meldekort && !meldekort.nyeMeldekort) return null;
  if (meldekort && meldekort.nyeMeldekort && !meldekort.nyeMeldekort.nesteMeldekort) return null;

  const { nesteMeldekort } = meldekort.nyeMeldekort;
  const idag = new Date(new Date().toISOString().substr(0, 10));
  // const fra = new Date(nesteMeldekort.fra)
  // const kanSendesFra = new Date(nesteMeldekort.kanSendesFra)
  const til = new Date(nesteMeldekort.til);
  const sisteDatoForTrekk = new Date(nesteMeldekort.sisteDatoForTrekk);

  if (til > idag) return null;

  return (
    <AlertStripeAdvarsel>
      Dersom du ikke sender inn meldekortet innen {sisteDatoForTrekk.toLocaleDateString()} vil du ikke lenger være
      registrert som arbeidssøker.
    </AlertStripeAdvarsel>
  );
}

export default MeldekortAdvarsel;
