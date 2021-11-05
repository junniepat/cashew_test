import {
    useLocation,
    Navigate
  } from "react-router-dom";
  import useAuth from "../hook/auth";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let {user} = useAuth();
    let location = useLocation();

    if (user === null || user === undefined) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} />;
    }
    return children;
  }