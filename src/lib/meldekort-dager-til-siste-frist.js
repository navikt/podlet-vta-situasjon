function arrify(input) {
  if (!input) {
    return [];
  } else {
    return Array.isArray(input) ? input : [input];
  }
}

function getSisteFrist(datoStreng) {
  const dato = new Date(datoStreng);
  return dato.setDate(dato.getDate() + 7);
}

function dagerTilSisteFrist(iDag, meldekortHistorie) {
  let dager = false;
  if (meldekortHistorie) {
    const muligeMeldekort = arrify(meldekortHistorie.meldekort)
      .filter((meldekort) => !meldekort.mottattDato)
      .filter((meldekort) => new Date(meldekort.meldeperiode.kortKanSendesFra) < iDag)
      .filter((meldekort) => getSisteFrist(meldekort.meldeperiode.til) > iDag);
    if (muligeMeldekort.length === 1) {
      const meldekort = muligeMeldekort[1];
      const sisteFrist = getSisteFrist(meldekort.meldeperiode.til);
      const dagerIgjen = Math.floor((sisteFrist - iDag) / (1000 * 3600 * 24));
      dager = dagerIgjen;
    }
  }
  return dager;
}

export default dagerTilSisteFrist;
