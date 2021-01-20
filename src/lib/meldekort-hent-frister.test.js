import meldekortHistore from "../mocks/meldekort.json";
import hentMeldekortFrister from "./meldekort-hent-frister";

describe("tester at meldekort-hent-frister fungerer", () => {
  test("den returnerer null uten meldekortHistorie", () => {
    const iDag = new Date(new Date().toISOString().substr(0, 10));
    const dager = hentMeldekortFrister(iDag);
    expect(dager).toBe(null);
  });

  test("den returnerer null for 2021-01-19", () => {
    const iDag = new Date("2021-01-19T12:00:00+01:00");
    const dager = hentMeldekortFrister(iDag, meldekortHistore);
    expect(dager).toBe(null);
  });

  test("den returnerer 6 dager til inaktivering og 2 dager etter periodeslutt for 2020-12-15", () => {
    const iDag = new Date("2020-12-15T12:00:00+01:00");
    const dager = hentMeldekortFrister(iDag, meldekortHistore);
    const { dagerTilInaktivering, dagerFraPeriodeSlutt } = dager;
    expect(dagerTilInaktivering).toBe(6);
    expect(dagerFraPeriodeSlutt).toBe(2);
  });

  test("den returnerer 6 dager til inaktivering og 2 dager etter periodeslutt for 2020-12-29", () => {
    const iDag = new Date("2020-12-29");
    const dager = hentMeldekortFrister(iDag, meldekortHistore);
    const { dagerTilInaktivering, dagerFraPeriodeSlutt } = dager;
    expect(dagerTilInaktivering).toBe(6);
    expect(dagerFraPeriodeSlutt).toBe(2);
  });

  test("den returnerer 0 dager til inaktivering og 8 dager etter periodeslutt for 2021-01-04", () => {
    const iDag = new Date("2021-01-04");
    const dager = hentMeldekortFrister(iDag, meldekortHistore);
    const { dagerTilInaktivering, dagerFraPeriodeSlutt } = dager;
    expect(dagerTilInaktivering).toBe(0);
    expect(dagerFraPeriodeSlutt).toBe(8);
  });
});
