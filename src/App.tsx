import React from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";

const situasjoner = ["arbeideledig", "i arbeid", "pensjonert", "på ferie", "NAV-ansatt", "sulten"];

const fornavn = ["Julian", "Geir", "Michael", "Sergio", "Tormod"];
const etternavn = ["Navnesen", "Testesen", "Olsen", "Hansen", "Navesen", "Narvesen"];

function App() {
  const situasjon = situasjoner[~~(situasjoner.length * Math.random())];
  const navn = fornavn[~~(fornavn.length * Math.random())] + " " + etternavn[~~(etternavn.length * Math.random())];
  return (
    <div className="App">
      <Panel border>
        <Systemtittel>Hei, {navn}!</Systemtittel>
        <Normaltekst>
          Våre roboter har konkludert med at du er <b>{situasjon}</b>. Stemmer ikke dette?{" "}
          <a href="mailto:toppledelsen@nav.no">Send klage.</a>
        </Normaltekst>
      </Panel>
    </div>
  );
}

export default App;
