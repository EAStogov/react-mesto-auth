import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./MyProfile";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Switch>
      <ProtectedRoute path="/" loggedIn={loggedIn} component = {MyProfile}/>
      <Route path="sign-up"></Route>
      <Route path="sign-in"></Route>
    </Switch>
  );
}

export default App;
