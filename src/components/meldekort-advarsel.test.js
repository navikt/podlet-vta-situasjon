import { render, screen } from "@testing-library/react";
import MeldekortAdvarsel from "./meldekort-advarsel";

describe("Tester komponenten MeldekortAdvarsel", () => {
  test("Komponenten vises IKKE om man ikke har meldekort", () => {
    const { container } = render(<MeldekortAdvarsel />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om dager til frist ikke finnes", () => {
    const frister = null;
    const { container } = render(<MeldekortAdvarsel frister={frister} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om dagerTilFrist er under 0", () => {
    const frister = {
      dagerTilInaktivering: -1,
    };
    const { container } = render(<MeldekortAdvarsel frister={frister} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises om dagerTilFrist er ok", () => {
    const frister = {
      dagerTilInaktivering: 2,
    };
    const { container } = render(<MeldekortAdvarsel frister={frister} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
