import React from "react";
import useSWR from "swr";
import "./App.css";
import Oppfolging from "./components/oppfolging";
import Avregistrering from "./components/avregistrering";
import Meldekort from "./components/meldekort";
import Reaktivering from "./components/reaktivering";
import { authUrl, meldekortinfoUrl, oppfolgingUrl } from "./url";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data: auth } = useSWR(authUrl, fetcher);
  const { data: meldekort } = useSWR(meldekortinfoUrl, fetcher);
  const { data: oppfolging } = useSWR(auth && auth.securityLevel === "4" ? oppfolgingUrl : null, fetcher);

  return (
    <div className="podlet-vta-situasjon">
      <Oppfolging oppfolging={oppfolging} />
      <Meldekort meldekort={meldekort} />
      <Avregistrering oppfolging={oppfolging} />
      <Reaktivering oppfolging={oppfolging} />
    </div>
  );
}

export default App;
