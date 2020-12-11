import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Avregistrering from "./avregistrering";

describe("tester Avregistrering komponenten", () => {
  test("komponenten rendres IKKE om man ikke er under oppfølging", () => {
    const { container } = render(<Avregistrering oppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten vises IKKE om man er under oppfølging og formidlingsgruppe IARBS", () => {
    const oppfolging = {
      underOppfolging: true,
      formidlingsgruppe: "IARBS",
    };
    const { container } = render(<Avregistrering oppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten vises IKKE om man IKKE er under oppfølging", () => {
    const oppfolging = {
      underOppfolging: false,
    };
    const { container } = render(<Avregistrering oppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES om man er under oppfølging og formidlingsgruppe ARBS", () => {
    const oppfolging = {
      underOppfolging: true,
      formidlingsgruppe: "ARBS",
    };
    render(<Avregistrering oppfolging={oppfolging} />);
    expect(screen.getByText(/registrert/i)).toBeInTheDocument();
  });

  test("Man får mer informasjon ved å klikke på lenken", async () => {
    const oppfolging = {
      underOppfolging: true,
      formidlingsgruppe: "ARBS",
    };
    render(<Avregistrering oppfolging={oppfolging} />);
    expect(await screen.queryByText(/min venn/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(/registrert/i));
    expect(screen.getByText(/min venn/i)).toBeInTheDocument();
  });
});
