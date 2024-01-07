import React from "react";

import { AuthContext } from "./context/auth-context";
import UnauthenticatedApp from "./unauthenticated-app";
import AuthenticatedApp from "./authenticated-app";

function App() {
  const { user } = React.useContext(AuthContext);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
