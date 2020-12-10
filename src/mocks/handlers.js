import get from "./msw-utils";
import oppfolging from "./oppfolging.json";
import meldekortinfo from "./meldekortinfo.json";
import auth from "./auth.json";

export const handlers = [
  get("https://api.nav.no/vta-api/oppfolging", oppfolging),
  get("https://api.nav.no/dittnav-api/meldekortinfo", meldekortinfo),
  get("https://api.nav.no/innloggingsstatus/auth", auth),
];
