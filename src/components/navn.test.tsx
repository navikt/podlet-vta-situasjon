import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Navn from "./navn";

describe("tester Navn komponenten", () => {
  test("komponenten rendres IKKE uten innhold", () => {
    const { container } = render(<Navn />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES med navn", () => {
    const navn: string = "Grim Gråsodden";
    render(<Navn navn={navn} />);
    expect(screen.getByText(navn)).toBeInTheDocument();
  });
});
