import { FC } from "react";
import { useAuth0 } from "../utils/auth0-spa";

type Props = {
  color: string;
};

export const LogInButton: FC<Props> = ({ color }) => {
  const { loginWithRedirect } = useAuth0();
  const handleClick = () => {
    loginWithRedirect({});
  };
  return (
    <button
      className={`waves-effect waves-light btn ${color}`}
      onClick={handleClick}
    >
      Log in
    </button>
  );
};
