import { render, screen } from "@testing-library/react";
import dagerTilSisteFrist from "../lib/meldekort-dager-til-siste-frist";
import MeldekortAdvarsel from "./meldekort-advarsel";

describe("Tester komponenten MeldekortAdvarsel", () => {
  test("Komponenten vises IKKE om man ikke har meldekort", () => {
    const { container } = render(<MeldekortAdvarsel />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om dager til frist ikke finnes", () => {
    const dagerTilFrist = false;
    const { container } = render(<MeldekortAdvarsel dagerTilFrist={dagerTilFrist} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om dagerTilFrist er under 0", () => {
    const dagerTilFrist = -1;
    const { container } = render(<MeldekortAdvarsel dagerTilFrist={dagerTilFrist} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises om dagerTilFrist er ok", () => {
    const dagerTilFrist = 2;
    const { container } = render(<MeldekortAdvarsel dagerTilFrist={dagerTilFrist} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
