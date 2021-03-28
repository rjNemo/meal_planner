import React, { useEffect, useState } from "react";
import { useAuth0 } from "../utils/auth0-spa";
import { PreLoader } from "../components/PreLoader";
import { ProfilePage } from "../pages/ProfilePage";
import { useFirebase } from "../services/Firebase";

export const ProfileController = () => {
  const { loading, user } = useAuth0();
  const [favs, setFavs] = useState([]);
  const db = useFirebase();

  useEffect(() => {
    db.getByEmail(user.email).then((res) => {
      setFavs(res.favs);
    });
  }, [db, user.email]);

  return loading || !user ? ( // is catched by PrivateRoute
    <div className="container center-align">
      <PreLoader />
    </div>
  ) : (
    <ProfilePage user={user} data={favs} />
  );
};
