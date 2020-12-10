import React from "react";
import Panel from "nav-frontend-paneler";
import useSWR from "swr";
import "./App.css";
import Navn from "./components/navn";
import Oppfolging from "./components/oppfolging";
import Avregistrering from "./components/avregistrering";
import Meldekort from "./components/meldekort";
import { navnUrl, meldekortinfoUrl, underOppfolgingUrl, oppfolgingUrl } from "./url";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data: navnData } = useSWR(navnUrl, fetcher);
  const { data: meldekort } = useSWR(meldekortinfoUrl, fetcher);
  const { data: underOppfolging } = useSWR(underOppfolgingUrl, fetcher);
  const { data: oppfolging } = useSWR(oppfolgingUrl, fetcher);

  return (
    <div className="podlet-vta-situasjon">
      <Panel border>
        {navnData && <Navn {...navnData} />}
        <Oppfolging oppfolging={oppfolging} />
        <Meldekort meldekort={meldekort} />
        <Avregistrering underOppfolging={underOppfolging} />
      </Panel>
    </div>
  );
}

export default App;
