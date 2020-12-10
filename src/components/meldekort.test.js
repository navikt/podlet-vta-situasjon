import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Meldekort from "./meldekort";
import data from "../mocks/meldekortinfo.json";

describe("tester Meldekort komponenten", () => {
  test("komponenten rendres IKKE uten innhold", () => {
    const { container } = render(<Meldekort />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES med meldekort", () => {
    const status = "ikke registrert som arbeidssøker";
    render(<Meldekort meldekort={data} />);
    expect(screen.getByText(/meldekort/)).toBeInTheDocument();
  });
});
