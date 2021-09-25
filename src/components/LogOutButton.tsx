import { useAuth0 } from "../utils/auth0-spa";

export const LogOutButton = () => {
  const { logout } = useAuth0();
  const handleClick = () => logout();

  return (
    <button className="waves-effect waves-teal btn-flat" onClick={handleClick}>
      Log out
    </button>
  );
};
