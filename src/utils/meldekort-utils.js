/**
 * Vi nullstiller klokkeslettet hele vegen
 * Argumentet er at inaktiveringsbatchen kjøres 02:00 dagen etter siste frist (14 timer etter 12)
 */

import { datoUtenTid, plussDager } from "./date-utils";

const dagIms = 1000 * 60 * 60 * 24;
const dagerIMeldeperiode = 14;

function antallDagerMellom(startDato, sluttDato) {
  const ms = Math.abs(sluttDato.getTime() - startDato.getTime());
  return Math.round(ms / dagIms); // Avrunding for å ta hensyn til sommer/vintertid
}

function fastsattMeldedagForMeldekort(meldekort) {
  // Fastsatt meldedag er mandag, og siste dag i perioden er søndag
  const sisteDagIPeriode = datoUtenTid(meldekort.meldeperiode.til);
  return plussDager(sisteDagIPeriode, 1);
}

export function foersteSendedagForMeldekort(meldekort) {
  // Meldekort kan sendes fra lørdag, to dager før fastsatt meldedag (mandag)
  return datoUtenTid(meldekort.meldeperiode.kortKanSendesFra);
}

function sisteDagFoerNesteMeldekortsFoersteSendedag(meldekort) {
  const foersteSendedag = foersteSendedagForMeldekort(meldekort); // Lørdag (dag -2)
  const fastsattMeldedag = fastsattMeldedagForMeldekort(meldekort); // Mandag (dag 0)

  const dagerFraSendedagTilMeldedag = antallDagerMellom(foersteSendedag, fastsattMeldedag); // 2
  const antallDagerFraMeldedagTilNesteSendedag = dagerIMeldeperiode - dagerFraSendedagTilMeldedag; // 12

  const nesteMeldekortsSendedag = plussDager(fastsattMeldedag, antallDagerFraMeldedagTilNesteSendedag);
  const sisteDag = plussDager(nesteMeldekortsSendedag, -1); // Fredag (dag 11)
  return sisteDag;
}

function antallDagerEtterFastsattMeldedag(iDag, meldekort) {
  const fastsattMeldedag = fastsattMeldedagForMeldekort(meldekort);
  const antallDager = antallDagerMellom(iDag, fastsattMeldedag);

  if (iDag < fastsattMeldedag) {
    return -antallDager;
  }
  return antallDager;
}

function harBrukerLevertMeldekort(meldekort) {
  return meldekort.mottattDato;
}

export function hentMeldekortForLevering(iDag, meldekortHistorie) {
  if (!meldekortHistorie || !meldekortHistorie.meldekort) {
    return [];
  }

  const meldekortForLevering = meldekortHistorie.meldekort
    .filter((meldekort) => !harBrukerLevertMeldekort(meldekort))
    .filter((meldekort) => foersteSendedagForMeldekort(meldekort) <= iDag)
    .filter((meldekort) => meldekort.meldeperiode.kanKortSendes);
  return meldekortForLevering;
}

export function hentFoerstkommendeMeldekortIkkeKlarForLevering(iDag, meldekort) {
  if (!meldekort || !meldekort.meldekort) {
    return null;
  }
  const meldekortIkkeKlarForLevering = meldekort.meldekort
    .filter((meldekort) => !harBrukerLevertMeldekort(meldekort))
    .filter((meldekort) => foersteSendedagForMeldekort(meldekort) > iDag)
    .filter((meldekort) => !meldekort.meldeperiode.kanKortSendes)
    .sort((m1, m2) => foersteSendedagForMeldekort(m1).getTime() - foersteSendedagForMeldekort(m2).getTime());

  return meldekortIkkeKlarForLevering[0];
}

function hentFoerstkommendeMeldekortKlarForLevering(iDag, meldekortHistorie) {
  const foerstkommendeMeldekortForLevering = hentMeldekortForLevering(iDag, meldekortHistorie).filter(
    (meldekort) => sisteDagFoerNesteMeldekortsFoersteSendedag(meldekort) >= iDag
  );
  return foerstkommendeMeldekortForLevering;
}

export function beregnDagerEtterFastsattMeldedag(iDag, meldekortHistorie) {
  const antallDagerEtterFastsattMeldedagPerMeldekort = hentFoerstkommendeMeldekortKlarForLevering(
    iDag,
    meldekortHistorie
  ).map((meldekort) => antallDagerEtterFastsattMeldedag(iDag, meldekort));

  if (antallDagerEtterFastsattMeldedagPerMeldekort.length === 0) {
    return null;
  }
  const flestAntallDager = antallDagerEtterFastsattMeldedagPerMeldekort.reduce((a, b) => Math.max(a, b));
  return flestAntallDager;
}

export function hentMeldegruppeForNesteMeldekort(meldekortHistorie) {
  const meldegruppePerMeldekort = meldekortHistorie.meldekort.map((meldekort) => meldekort.meldegruppe);

  if (!meldegruppePerMeldekort || meldegruppePerMeldekort.length === 0) {
    return null;
  }
  // Prioriterer det første meldekortet som tilfredstiller kriteriet
  return meldegruppePerMeldekort[0];
}

export function beregnDagerTilInaktivering(dagerEtterFastsattMeldedag) {
  // Inaktivering skjer natt til tirsdag (dag 8)
  return 7 - dagerEtterFastsattMeldedag;
}
