function getEnvironment() {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const MELDEKORTINFO_URL = {
  development: "https://api.nav.no/dittnav-api/meldekortinfo",
  production: "https://www.dev.nav.no/person/dittnav-api/meldekortinfo",
};

const MELDEKORT_URL = {
  development: "https://api.nav.no/api-meldekort",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-meldekort",
};

const OPPFOLGING_URL = {
  production: "https://api.nav.no/vta-api/oppfolging",
  development: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-oppfolging",
};

const REGISTRERING_URL = {
  production: "https://api.nav.no/vta-api/registrering",
  development: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-registrering",
};

const AUTH_URL = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

export const meldekortUrl = MELDEKORT_URL[getEnvironment()];
export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const registreringUrl = REGISTRERING_URL[getEnvironment()];
export const authUrl = AUTH_URL[getEnvironment()];
