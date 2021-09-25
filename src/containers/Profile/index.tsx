import { useEffect, useState } from "react";
import { PreLoader } from "../../components/PreLoader";
import { useFirebase } from "../../services/Firebase";
import { MealSummary } from "../../types/meal";
import { useAuth0 } from "../../utils/auth0-spa";
import { ProfilePage } from "./components/ProfilePage";

export const Profile = () => {
  const { loading, user } = useAuth0();
  const [favs, setFavs] = useState([] as MealSummary[]);
  const db = useFirebase();

  useEffect(() => {
    db.getByEmail(user.email).then((res) => {
      setFavs(res.favs);
    });
  }, [db, user.email]);

  return loading || !user ? ( // is caught by PrivateRoute
    <div className="container center-align">
      <PreLoader />
    </div>
  ) : (
    <ProfilePage user={user} meals={favs} />
  );
};
