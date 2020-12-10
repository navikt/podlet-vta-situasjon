import React from "react";
import Panel from "nav-frontend-paneler";
import useSWR from "swr";
import "./App.css";
import Navn from "./components/navn";
import Status from "./components/status";
import Avregistrering from "./components/avregistrering";
import Meldekort from "./components/meldekort";
import { navnUrl, meldekortinfoUrl, underOppfolgingUrl } from "./url";

const statuser = ["registrert som arbeidssøker", "ikke lenger registrert som arbeidssøker", undefined];

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const status = statuser[~~(statuser.length * Math.random())];
  const { data: navnData } = useSWR(navnUrl, fetcher);
  const { data: meldekort } = useSWR(meldekortinfoUrl, fetcher);
  const { data: underOppfolging } = useSWR(underOppfolgingUrl, fetcher);

  return (
    <div className="podlet-vta-situasjon">
      <Panel border>
        {navnData && <Navn {...navnData} />}
        <Status status={status} />
        <Meldekort meldekort={meldekort} />
        <Avregistrering underOppfolging={underOppfolging} />
      </Panel>
    </div>
  );
}

export default App;
