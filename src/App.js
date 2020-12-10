import React from "react";
import Panel from "nav-frontend-paneler";
import useSWR from "swr";
import "./App.css";
import Navn from "./components/navn";
import Status from "./components/status";
import Avregistrering from "./components/avregistrering";
import Meldekort from "./components/meldekort";

const navnUrl =
  process.env.NODE_ENV === "development"
    ? "https://api.nav.no/dittnav-api/personalia/navn"
    : "https://www.dev.nav.no/person/dittnav-api/personalia/navn";

const statuser = ["registrert som arbeidssøker", "ikke lenger registrert som arbeidssøker", undefined];
// const oppfolging = [true, false];

const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  // const underOppfolging = oppfolging[~~(oppfolging.length * Math.random())];
  const status = statuser[~~(statuser.length * Math.random())];
  const { data: navnData } = useSWR(navnUrl, fetcher);
  return (
    <div className="podlet-vta-situasjon">
      <Panel border>
        {navnData && <Navn {...navnData} />}
        <Status status={status} />
        <Meldekort />
        <Avregistrering underOppfolging={true} />
      </Panel>
    </div>
  );
}

export default App;
