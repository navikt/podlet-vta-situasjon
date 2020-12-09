import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Avregistrering from "./avregistrering";

describe("tester Avregistrering komponenten", () => {
  test("komponenten rendres IKKE om man ikke er under oppfølging", () => {
    const { container } = render(<Avregistrering underOppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES om man er under oppfølging", () => {
    render(<Avregistrering underOppfolging={true} />);
    expect(screen.getByText(/registrert/)).toBeInTheDocument();
  });

  test("Man får mer informasjon ved å klikke på lenken", async () => {
    render(<Avregistrering underOppfolging={true} />);
    expect(await screen.queryByText(/min venn/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(/registrert/i));
    expect(screen.getByText(/min venn/i)).toBeInTheDocument();
  });
});
