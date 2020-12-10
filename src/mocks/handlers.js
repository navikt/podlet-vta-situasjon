import get from "./msw-utils";
import oppfolging from "./oppfolging.json";
import oppfolgingData from "./oppfolging-data.json";
import meldekortinfo from "./meldekortinfo.json";
import getNavn from "./person-navn";
import ident from "./person-ident.json";
import innloggingslinje from "./innloggingslinje.json";

export const handlers = [
  get("https://api.nav.no/dittnav-api/oppfolging", oppfolging),
  get("https://api.nav.no/vta-api/oppfolging", oppfolgingData),
  get("https://api.nav.no/dittnav-api/meldekortinfo", meldekortinfo),
  get("https://api.nav.no/dittnav-api/personalia/navn", getNavn()),
  get("https://api.nav.no/dittnav-api/personalia/ident", ident),
  get("https://api.nav.no/dittnav-api/innloggingslinje-api/auth", innloggingslinje),
];
