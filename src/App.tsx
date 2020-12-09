import React from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
import Navn from "./components/navn";
import Status from "./components/status";
import Avregistrering from "./components/avregistrering";
import Meldekort from "./components/meldekort";

const statuser = ["registrert som arbeidssøker", "ikke lenger registrert som arbeidssøker", undefined];
const oppfolging = [true, false];
const fornavn = ["Julian", "Geir", "Michael", "Sergio", "Tormod"];
const etternavn = ["Navnesen", "Navresen", "Nasreven", "Navensen", "Navesen", "Narvesen"];

function App() {
  const underOppfolging = oppfolging[~~(oppfolging.length * Math.random())];
  const status = statuser[~~(statuser.length * Math.random())];
  const navn = fornavn[~~(fornavn.length * Math.random())] + " " + etternavn[~~(etternavn.length * Math.random())];
  return (
    <div className="podlet-vta-situasjon">
      <Panel border>
        <Navn navn={navn} />
        <Status status={status} />
        <Meldekort meldekort={"ja"} />
        <Avregistrering underOppfolging={true} />
      </Panel>
    </div>
  );
}

export default App;
