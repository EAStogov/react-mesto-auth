const Form = ({name, title, onSubmit, submitButtonText, children, isForAuth}) => {
  return (
    <div className="form__container" style={isForAuth && {backgroundColor: "black", color: "white"}}>
      <h2 className="form__heading" style={isForAuth && {textAlign: "center"}}>{title}</h2>
      <form
        action="url"
        onSubmit={onSubmit}
        name={`form__form-${name}`}
        className={`form__body form__body_fill_${name}`}
        noValidate>
        {children}
        <button type="submit" className="form__submit page__button" style={isForAuth && {backgroundColor: "white", color: "black"}}>
          {submitButtonText}
        </button>
      </form>
    </div>
  )
}

export default Form;