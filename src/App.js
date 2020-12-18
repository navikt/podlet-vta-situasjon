import React from "react";
import useSWR from "swr";
import "./App.css";
import Oppfolging from "./components/oppfolging";
import Avregistrering from "./components/avregistrering";
import Meldekort from "./components/meldekort";
import Reaktivering from "./components/reaktivering";
import { authUrl, meldekortinfoUrl, oppfolgingUrl, registreringUrl } from "./url";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data: auth } = useSWR(authUrl, fetcher);
  const { data: meldekort } = useSWR(meldekortinfoUrl, fetcher);
  const { data: oppfolging } = useSWR(auth && auth.securityLevel === "4" ? oppfolgingUrl : null, fetcher);
  const { data: registrering } = useSWR(auth && auth.securityLevel === "4" ? registreringUrl : null, fetcher);

  return (
    <div className="podlet-vta-situasjon">
      <Oppfolging oppfolging={oppfolging} registrering={registrering} />
      <Meldekort meldekort={meldekort} />
      <Avregistrering oppfolging={oppfolging} registrering={registrering} />
      <Reaktivering oppfolging={oppfolging} registrering={registrering} />

      <button
        onClick={() => {
          throw new Error("Jeg ønsker meg en Sentry-feil til jul");
        }}
      >
        Kræsj
      </button>
    </div>
  );
}

export default App;
