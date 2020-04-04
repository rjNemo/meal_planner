import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/auth0-spa";
import history from "./utils/history";
import config from "./utils/auth_config.json"; // for safety reasons this file is not tracked by git
import Firebase, { FirebaseContext } from "./services/Firebase";

const onRedirectCallBack = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallBack={onRedirectCallBack}
  >
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.register();
