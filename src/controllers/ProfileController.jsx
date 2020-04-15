import React, { useEffect, useState } from "react";
import { useAuth0 } from "../utils/auth0-spa";
import { PreLoader } from "../components/PreLoader";
import { ProfilePage } from "../pages/ProfilePage";
import { useFirebase } from "../services/Firebase";

export const ProfileController = () => {
  const { loading, user } = useAuth0();
  const [data, setData] = useState();
  const db = useFirebase();

  useEffect(() => {
    db.get(user.email).then((res) => setData(res));
  }, [db, user.email]);

  return loading || !user ? ( // is catched by PrivateRoute
    <div className="container center-align">
      <PreLoader />
    </div>
  ) : (
    <ProfilePage user={user} data={data} />
  );
};
