import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/auth0-spa";
import history from "./utils/history";
import Firebase, { FirebaseContext } from "./services/Firebase";
import config from "./utils/auth_config.json";

const onRedirectCallBack = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    // domain={process.env.DOMAIN}
    // client_id={process.env.CLIENT_ID}
    domain={config.DOMAIN}
    client_id={config.CLIENT_ID}
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
