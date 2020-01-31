import React from "react";
import { useAuth0 } from "../utils/auth0-spa";
import { PreLoader } from "../components/PreLoader";

export const Profile = () => {
  const { loading, user } = useAuth0();

  return loading || !user ? ( // is catched by PrivateRoute
    <div className="container center-align">
      <PreLoader />
    </div>
  ) : (
    <div className="container">
      <img className="circle responsive-img" src={user.picture} alt="Avatar" />
      <h2>{user.name}</h2>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </div>
  );
};
