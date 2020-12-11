import React from "react";
import { AlertStripeAdvarsel } from "nav-frontend-alertstriper";
import { Normaltekst } from "nav-frontend-typografi";

function Reaktivering(props) {
  const { oppfolging } = props;

  if (!oppfolging) return null;

  if (oppfolging && !oppfolging.kanReaktiveres) return null;

  return (
    <AlertStripeAdvarsel>
      <Normaltekst>
        Du er ikke lenger registrert hos NAV. Hvis du fortsatt skal motta ytelser og få oppfølging fra NAV må du være
        registrert.
      </Normaltekst>
    </AlertStripeAdvarsel>
  );
}

export default Reaktivering;
