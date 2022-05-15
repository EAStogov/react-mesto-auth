import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./MyProfile";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute loggedIn={loggedIn} component = {MyProfile}/>}/>
        <Route path="/signup"/>
        <Route path="/signin" element={
          <Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
