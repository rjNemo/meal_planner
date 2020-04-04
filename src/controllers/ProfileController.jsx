import React from "react";
import { useAuth0 } from "../utils/auth0-spa";
import { PreLoader } from "../components/PreLoader";
import { ProfilePage } from "../pages/ProfilePage";

export const ProfileController = () => {
  const { loading, user } = useAuth0();

  // const fn = async () => await fire.getByEmail(user.email);

  return loading || !user ? ( // is catched by PrivateRoute
    <div className="container center-align">
      <PreLoader />
    </div>
  ) : (
    <ProfilePage user={user} />
  );
};
