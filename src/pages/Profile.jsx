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
      <div className="row">
        <img
          className="circle responsive-img"
          src={user.picture}
          alt="Avatar"
          width="20%"
        />
        <h2>{user.name}</h2>
        <p>
          <b>Email: </b>
          {user.email}
          {/* <a href={`mailto:${user.email}`}>{user.email}</a> */}
        </p>
        {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      </div>
    </div>
  );
};
