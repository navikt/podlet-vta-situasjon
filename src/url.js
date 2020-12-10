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

const OPPFOLGING_URL = {
  development: "https://api.nav.no/vta-api/oppfolging",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-oppfolging",
};

const AUTH_URL = {
  development: "https://api.nav.no/dittnav-api/loginstatus",
  production: "https://www.dev.nav.no/person/dittnav-api/loginstatus",
};

export const meldekortinfoUrl = MELDEKORTINFO_URL[getEnvironment()];
export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const authUrl = AUTH_URL[getEnvironment()];
