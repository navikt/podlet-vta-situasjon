import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Meldekort from "./meldekort";
import MeldekortAdvarsel from "./meldekort-advarsel";

describe("tester Meldekort komponenten", () => {
  test("komponenten rendres IKKE uten innhold", () => {
    const { container } = render(<Meldekort />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten vises IKKE om man ikke har meldekort", () => {
    const { container } = render(<Meldekort />);
    expect(container).toBeEmptyDOMElement();
  });
});
