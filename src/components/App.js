import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./MyProfile";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import * as auth from "../utils/Auth";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAuthPopupOpened, setIsAuthPopupOpened] = useState(false);
  const [isAuthSucces, setIsAuthSucces] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .authorizate(token)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res) {
            signIn(res.data.email);
          }
        });
    }
  }, []);

  function signIn(email) {
    setUserEmail(email);
    setLoggedIn(true);
    navigate("/");
  }

  function unSign() {
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  function handleAuthSubmit(requestResponse) {
    setIsAuthSucces(requestResponse.ok);
    setIsAuthPopupOpened(true);
  }
  function closeAuthPopup() {
    setIsAuthPopupOpened(false);
  }

  function handleRegisterSubmit(password, email) {
    auth.register(password, email).then((res) => {
      if (res.ok) {
        navigate('/signin')
        return res.json();
      } else {
        return Promise.reject(`Что-то пошло не так. Код ошибки: ${res.status}`);
      }
    })
    .catch(() => {
      handleAuthSubmit(false);
    });
  }

  function handleLoginSubmit(password, email) {
    auth
      .login(password, email)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          handleAuthSubmit(false);
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        signIn(email);
      })
      .catch(() => {
        handleAuthSubmit(false);
      });
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MyProfile isLoggedIn={isLoggedIn} unSign={unSign} userEmail={userEmail} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              isLoggedIn={isLoggedIn}
              onSubmit={handleRegisterSubmit}
              onClosePopup={closeAuthPopup}
              isOpen={isAuthPopupOpened}
              isSucces={isAuthSucces}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              isLoggedIn={false}
              onSubmit={handleLoginSubmit}
              onClosePopup={closeAuthPopup}
              isOpen={isAuthPopupOpened}
              isSucces={isAuthSucces}
              signIn={signIn}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
