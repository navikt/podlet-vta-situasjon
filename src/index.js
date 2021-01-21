import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./index.css";
import App from "./App";
import { SWRConfig } from "swr";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
} else {
  Sentry.init({
    dsn: "https://c24577bb13734aaeb8968748ec67a24f@sentry.gc.nav.no/59",
    release: process.env.REACT_APP_SENTRY_RELEASE || "unknown",
  });
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ shouldRetryOnError: false }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("podlet-vta-situasjon")
);
