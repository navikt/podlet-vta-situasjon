import React from "react";

export interface MeldekortProps {
  etterregistrerteMeldekort: number;
  meldekortbruker: boolean;
  nyeMeldekort: {
    antallNyeMeldekort: number;
    nesteInnsendingAvMeldekort: string | null;
    nesteMeldekort: {
      fra: string;
      kanSendesFra: string;
      risikererTrekk: boolean;
      sisteDatoForTrekk: string;
      til: string;
      uke: string;
    };
  };
  resterendeFeriedager: number;
}

interface Props {
  meldekort?: MeldekortProps;
}

function Meldekort(props: Props) {
  const { meldekort } = props;

  if (!meldekort) return null;

  return <>...dersom du ikke sender meldekort innen 2 dager vil du ikke lenger være registrert som arbeidssøker</>;
}

export default Meldekort;
