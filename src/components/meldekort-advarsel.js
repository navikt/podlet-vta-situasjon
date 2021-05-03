import React from "react";
import { Normaltekst, Undertekst, UndertekstBold } from "nav-frontend-typografi";
import { ReactComponent as Varsel } from "./warning.svg";
import { Knapp } from "nav-frontend-knapper";

function MeldekortAdvarsel({ frister }) {
  if (!frister) return null;

  const { dagerTilInaktivering } = frister;
  if (dagerTilInaktivering < 0) return null;

  const { meldekort } = frister;

  const meldegruppe = meldekort.meldegruppe;

  return (
    <>
      <i>
        <Normaltekst id={"dager-til-inaktivering-info"}>
          Du har {dagerTilInaktivering} {dagerTilInaktivering > 1 ? "dager" : "dag"} på deg før fristen for meldekortet
          går ut.
        </Normaltekst>
      </i>
      {dagerTilInaktivering < 5 ? (
        <div className={"meldekortvarsel-container"}>
          <Varsel id={"meldekortvarsel-ikon"} alt={"Varselsikon"} fill={"blue"} />
          <UndertekstBold>
            Dersom du <span id={"meldekortvarsel-underline"}>ikke sender inn meldekort </span> vil:
          </UndertekstBold>
          <Undertekst id={"konsekvenser-for-sen-innmelding"}>
            {meldegruppe === "DAGP"
              ? `1. Dagpengene for dagene fra ${prettyprintDato(meldekort.meldeperiode.fra)} til 
        ${prettyprintDato(meldekort.meldeperiode.til)} ikke bli utbetalt.`
              : ""}
            <br />
            {"2. Du vil ikke lenger være registrert som arbeidssøker"}
          </Undertekst>
          <br />
        </div>
      ) : null}
      <Knapp id={"meldekort-knapp"}>Gå til meldekortet</Knapp>
    </>
  );
}

export default MeldekortAdvarsel;

function prettyprintDato(dato) {
  dato = new Date(dato);
  return `${dato.getDate()}/${dato.getMonth() + 1}/${dato.getFullYear()}`;
}
