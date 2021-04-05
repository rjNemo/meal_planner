import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/auth0-spa";
import history from "./utils/history";
import { FirebaseContext } from "./services/Firebase";
import { AppProvider } from "./store/meal";

const onRedirectCallBack = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    client_id={process.env.REACT_APP_CLIENT_ID}
    redirect_uri={window.location.origin}
    onRedirectCallBack={onRedirectCallBack}
  >
    {/*<FirebaseContext.Provider value={new Firebase()}> todo fix Firebase app*/}
    <FirebaseContext.Provider>
      <AppProvider>
        <App />
      </AppProvider>
    </FirebaseContext.Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.register();
