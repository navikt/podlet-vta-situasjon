import { render, screen } from "@testing-library/react";
import MeldekortAdvarsel from "./meldekort-advarsel";

describe("Tester komponenten MeldekortAdvarsel", () => {
  test("Komponenten vises IKKE om man ikke har meldekort", () => {
    const { container } = render(<MeldekortAdvarsel />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om man ikke har nye meldekort", () => {
    const data = {
      nyeMeldekort: null,
    };
    const { container } = render(<MeldekortAdvarsel />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om man ikke har nesteMeldekort", () => {
    const data = {
      nyeMeldekort: {
        nesteMeldekort: null,
      },
    };
    const { container } = render(<MeldekortAdvarsel />);
    expect(container).toBeEmptyDOMElement();
  });
});
