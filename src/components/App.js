import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./MyProfile";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  function unSign() {
    setLoggedIn(false);
  }
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <ProtectedRoute isLoggedIn={true}>
            <MyProfile isLoggedIn={isLoggedIn} unSign={unSign}/>
          </ProtectedRoute>}/>
        <Route path="/signup" element={
          <Register isLoggedIn={isLoggedIn}/>
        }/>
        <Route path="/signin" element={
          <Login isLoggedIn={false}/>}/>
      </Routes>
    </div>
  );
}

export default App;
