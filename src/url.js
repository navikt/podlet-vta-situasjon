function getEnvironment() {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const NAVN_URL = {
  development: "https://api.nav.no/dittnav-api/personalia/navn",
  production: "https://www.dev.nav.no/person/dittnav-api/personalia/navn",
};

const MELDEKORTINFO_URL = {
  development: "https://api.nav.no/dittnav-api/meldekortinfo",
  production: "https://www.dev.nav.no/person/dittnav-api/meldekortinfo",
};

const UNDER_OPPFOLGING_URL = {
  development: "https://api.nav.no/dittnav-api/oppfolging",
  production: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
};

const OPPFOLGING_URL = {
  development: "https://api.nav.no/vta-api/oppfolging",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-oppfolging",
};

const AUTH_URL = {
  development: "https://api.nav.no/dittnav-api/innloggingslinje-api/auth",
  production: "https://www.dev.nav.no/person/dittnav-api/innloggingslinje-api/auth",
};

export const navnUrl = NAVN_URL[getEnvironment()];
export const meldekortinfoUrl = MELDEKORTINFO_URL[getEnvironment()];
export const underOppfolgingUrl = UNDER_OPPFOLGING_URL[getEnvironment()];
export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const authUrl = AUTH_URL[getEnvironment()];
