import meldekortHistore from "../mocks/meldekort.json";
import dagerTilSisteFrist from "./meldekort-dager-til-siste-frist";

describe("tester at meldekort-dager-til-siste-frist fungerer", () => {
  test("den returnerer null uten meldekortHistorie", () => {
    const iDag = new Date(new Date().toISOString().substr(0, 10));
    const dager = dagerTilSisteFrist(iDag);
    expect(dager).toBe(null);
  });

  test("den returnerer null for 2021-01-19", () => {
    const iDag = new Date("2021-01-19T12:00:00+01:00");
    const dager = dagerTilSisteFrist(iDag, meldekortHistore);
    expect(dager).toBe(null);
  });

  test("den returnerer 6 for 2020-12-15", () => {
    const iDag = new Date("2020-12-15T12:00:00+01:00");
    const dager = dagerTilSisteFrist(iDag, meldekortHistore);
    expect(dager).toBe(6);
  });

  test("den returnerer 6 for 2020-12-29", () => {
    const iDag = new Date("2020-12-29");
    const dager = dagerTilSisteFrist(iDag, meldekortHistore);
    expect(dager).toBe(6);
  });

  test("den returnerer 0 for 2021-01-04", () => {
    const iDag = new Date("2021-01-04");
    const dager = dagerTilSisteFrist(iDag, meldekortHistore);
    expect(dager).toBe(0);
  });
});
