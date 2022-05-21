import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import InfoTooltip from "./InfoTooltip";
import * as auth from "./Auth";
const Login = ({ isLoggedIn, onSubmit, onClosePopup, isOpen, isSucces, signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    auth
      .login(password, email)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          onSubmit(false);
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .then(() => {
        auth
          .authorizate(localStorage.getItem("token"))
          .then((res) => {
            onSubmit(res);
            if (res.ok) {
              return res.json();
            } else {
              onSubmit(false);
            }
          })
          .then((res) => {
            signIn(res.data.email);
          })
          .catch(err => {
            alert("Что-то пошло не так. Ошибка: " + err);
          });
      });
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} authAction="Регистрация" route="/signup" />
      <Form
        name="login"
        title="Вход"
        isForAuth={true}
        submitButtonText="Войти"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          value={email || ''}
          onChange={handleEmailChange}
          placeholder="Email"
          name="about"
          required
          minLength={2}
          maxLength={30}
          className="form__input form__input_auth"
        />
        <span className="popup__error popup__error_type_about"></span>
        <input
          type="password"
          value={password || ''}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          name="link"
          required
          className="form__input form__input_auth"
        />
      </Form>
      <InfoTooltip isSucces={isSucces} isOpen={!isSucces && isOpen} onClose={onClosePopup} />
    </>
  );
};
export default Login;
