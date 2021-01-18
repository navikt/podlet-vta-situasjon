const express = require("express");
const Podlet = require("@podium/podlet");
const fs = require("fs");

const promClient = require("prom-client");
const PrometheusConsumer = require("@metrics/prometheus-consumer");

const basePath = process.env.BASE_PATH || "/arbeid/podlet-vta-situasjon";
const port = process.env.PORT || 7200;
const podletVersion = process.env.VERSION_HASH || `${new Date().getTime()}`;
const ptoProxyUrl = process.env.PTO_PROXY_URL;
const isDevelopmentEnv = true;

const podletName = "podlet-vta-situasjon";

let rawdata = fs.readFileSync("build/asset-manifest.json");
let assets = JSON.parse(rawdata);

const app = express();

const podlet = new Podlet({
  name: podletName,
  version: podletVersion,
  pathname: basePath,
  development: isDevelopmentEnv,
  logger: console,
});

assets.entrypoints.forEach((element, index) => {
  if (element.indexOf(".css") !== -1) {
    podlet.css({ value: `/${element}` });
  } else if (element.indexOf(".js") !== -1) {
    podlet.js({ value: `/${element}`, defer: true });
  }
});

app.use(podlet.middleware());
app.use("/static", express.static("./build/static"));
app.use("/assets", express.static("./build/"));
app.use(`${basePath}/static`, express.static("./build/static"));
app.use(`${basePath}/assets`, express.static("./build/"));

podlet.proxy({
  name: "api-oppfolging",
  target: `${ptoProxyUrl}/proxy/veilarboppfolging/api/oppfolging`,
});

podlet.proxy({
  name: "api-registrering",
  target: `${ptoProxyUrl}/proxy/veilarbregistrering/api/registrering`,
});

podlet.proxy({
  name: "api-meldekort",
  target: `https://www-q1.nav.no/meldekort/meldekort-api/api/person/meldekort`,
});

app.get(`${basePath}${podlet.content()}`, (req, res) => {
  const { mountOrigin, publicPathname } = res.locals.podium.context;
  const url = new URL(publicPathname, mountOrigin);
  console.log(url.href);
  res.status(200).podiumSend(`<div id="${podletName}"></div>`);
});

// generate the podlet manifest
app.get(`${basePath}${podlet.manifest()}`, (req, res) => {
  res.status(200).send(podlet);
});

// isAlive/isReady route for Nais
app.get(`${basePath}/isAlive|isReady`, (req, res) => res.sendStatus(200));

// Set up prometheus client with podium metrics
const metricsConsumer = new PrometheusConsumer({ client: promClient });
promClient.collectDefaultMetrics({ register: metricsConsumer.registry });
metricsConsumer.on("error", (err) => console.error(err));
podlet.metrics.pipe(metricsConsumer);

app.get("/metrics", async function (req, res) {
  const metrics = await metricsConsumer.metrics();
  res.set("Content-Type", metricsConsumer.contentType()).send(metrics);
});

//start the app at port

console.log(JSON.stringify(podlet, undefined, 2));
console.log(`Content path ${podlet.content()}`);
console.log(`Manifest path ${podlet.manifest()}`);
console.log(`Starting on port ${port} with basePath ${basePath}`);
app.listen(port);
