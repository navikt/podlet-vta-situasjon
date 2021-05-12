const msPerDoegn = 1000 * 60 * 60 * 24;

export function datoUtenTid(dato) {
  return new Date(dato.substr(0, 10));
}

export function plussDager(dato, antallDager) {
  const kopi = new Date(dato);
  kopi.setDate(kopi.getDate() + antallDager);
  return kopi;
}

export function foerstkommendeMandag(iDag) {
  let foerstkommendeMandag = datoUtenTid(iDag.toISOString());

  do {
    foerstkommendeMandag.setUTCMilliseconds(foerstkommendeMandag.getUTCMilliseconds() + msPerDoegn);
  } while (foerstkommendeMandag.getDay() !== 1);
  return foerstkommendeMandag;
}

export function hentISOUke(datoMedTid) {
  const dato = datoUtenTid(datoMedTid);
  const dagIUken = dato.getUTCDay() || 7;
  dato.setUTCDate(dato.getUTCDate() + 4 - dagIUken);
  const foersteDatoIAaret = new Date(Date.UTC(dato.getUTCFullYear(), 0, 1));
  return Math.ceil(((dato.getTime() - foersteDatoIAaret.getTime()) / msPerDoegn + 1) / 7);
}

export function datoMedUkedag(dato) {
  const dager = ["søndag", "mandag", "tirdag", "onsdag", "torsdag", "fredag", "lørdag"];

  const maneder = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  return `${dager[dato.getDay()]} ${dato.getDate()}. ${maneder[dato.getMonth()]}`;
}
