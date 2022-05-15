import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./MyProfile";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  function unSign() {
    setLoggedIn(false);
  }
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <MyProfile isLoggedIn={isLoggedIn} unSign={unSign}/>
          </ProtectedRoute>}/>
        <Route path="/signup"/>
        <Route path="/signin" element={
          <Login isLoggedIn={isLoggedIn}/>}/>
      </Routes>
    </div>
  );
}

export default App;
