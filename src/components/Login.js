import Form from "./Form";
import Header from "./Header";
const Login = ({isLoggedIn}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} authAction='Регистрация' route='/signup'/>
      <Form name="login" title="Вход" isForAuth={true} submitButtonText="Войти">
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
    </>
  )
}
export default Login;