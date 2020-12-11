import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Meldekort from "./meldekort";

describe("tester Meldekort komponenten", () => {
  test("komponenten rendres IKKE uten innhold", () => {
    const { container } = render(<Meldekort />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES med meldekortbruker true", () => {
    const data = {
      meldekortbruker: true,
    };
    render(<Meldekort meldekort={data} />);
    expect(screen.getByText(/meldekort/i)).toBeInTheDocument();
  });
});
