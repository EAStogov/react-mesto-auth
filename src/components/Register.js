import { NavLink } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
const Register = (isLoggedIn) => {
  return (
    <>
      <Header isLoggedIn={false} authAction='Войти' route='/signin'/>
      <Form name="register" title="Регистрация" isForAuth={true} submitButtonText="Зарегистрироваться">
        <input
          type="email"
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
          placeholder="Пароль"
          name="link"
          required
          className="form__input form__input_auth"
        />
      </Form>
      <p className="register__sign-in">Уже зарегистрированы? <NavLink to='/signin' className="register__link page__button">Войти</NavLink></p>
    </>
  )
}
export default Register;