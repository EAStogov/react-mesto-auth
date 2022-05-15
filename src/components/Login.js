import Form from "./Form";
const Login = () => {
  return (
    <Form name="login" title="Вход" isForAuth={true} submitButtonText="Войти">
      <input
        type="email"
        placeholder="Email"
        name="about"
        required
        minLength={2}
        maxLength={30}
        className="form__input form__input_value_about"
        style={{backgroundColor: "black", borderBottom: "2px solid white"}}
      />
      <span className="popup__error popup__error_type_about"></span>
      <input
        type="password"
        placeholder="Пароль"
        name="link"
        required
        className="form__input form__input_value_link"
        style={{backgroundColor: "black", borderBottom: "2px solid white"}}
      />
    </Form>
  )
}
export default Login;