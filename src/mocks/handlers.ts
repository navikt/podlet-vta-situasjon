import get from "./msw-utils";
import oppfolging from "./oppfolging.json";
import meldekortinfo from "./meldekortinfo.json";
import navn from "./person-navn.json";
import ident from "./person-ident.json";
import innloggingslinje from "./innloggingslinje.json";

export const handlers = [
  get("https://api.nav.no/dittnav-api/oppfolging", oppfolging),
  get("https://api.nav.no/dittnav-api/meldekortinfo", meldekortinfo),
  get("https://api.nav.no/dittnav-api/personalia/navn", navn),
  get("https://api.nav.no/dittnav-api/personalia/ident", ident),
  get("https://api.nav.no/dittnav-api/innloggingslinje-api/auth", innloggingslinje),
];
