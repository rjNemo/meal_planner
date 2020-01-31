import React from "react";
import { useAuth0 } from "../utils/auth0-spa";

export const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleClick = () => {
    loginWithRedirect({});
  };
  return (
    <button className="waves-effect waves-light btn" onClick={handleClick}>
      Log in
    </button>
  );
};
