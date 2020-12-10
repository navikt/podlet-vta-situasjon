import get from "./msw-utils";
import oppfolging from "./oppfolging.json";
import meldekortinfo from "./meldekortinfo.json";
import innloggingslinje from "./innloggingslinje.json";

export const handlers = [
  get("https://api.nav.no/vta-api/oppfolging", oppfolging),
  get("https://api.nav.no/dittnav-api/meldekortinfo", meldekortinfo),
  get("https://api.nav.no/dittnav-api/innloggingslinje-api/auth", innloggingslinje),
];
