import React from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
import Navn from "./components/navn";
import Status from "./components/status";

const statuser = ["registrert som arbeidssøker", "ikke lenger registrert som arbeidssøker", undefined];

const fornavn = ["Julian", "Geir", "Michael", "Sergio", "Tormod"];
const etternavn = ["Navnesen", "Navresen", "Nasreven", "Navensen", "Navesen", "Narvesen"];

function App() {
  const status = statuser[~~(statuser.length * Math.random())];
  const navn = fornavn[~~(fornavn.length * Math.random())] + " " + etternavn[~~(etternavn.length * Math.random())];
  return (
    <div className="podlet-vta-situasjon">
      <Panel border>
        <Navn navn={navn} />
        <Status status={status} />
      </Panel>
    </div>
  );
}

export default App;
