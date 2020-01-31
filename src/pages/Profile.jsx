import React from "react";
import { useAuth0 } from "../utils/auth0-spa";

export const Profile = () => {
  const { loading, user } = useAuth0();

  return loading || !user ? (
    <div>Loading ... </div> // is catched by PrivateRoute
  ) : (
    <div className="container">
      <img className="responsive-img" src={user.picture} alt="Avatar" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </div>
  );
};
