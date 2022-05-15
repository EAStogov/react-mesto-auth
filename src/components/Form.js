const Form = ({name, title, onSubmit, submitButtonText, children, isForAuth}) => {
  return (
    <div className={`form__container ${isForAuth && 'form__container_auth'}`}>
      <h2 className={`form__heading ${isForAuth && 'form__heading_auth'}`}>{title}</h2>
      <form
        action="url"
        onSubmit={onSubmit}
        name={`form__form-${name}`}
        className={`form__body form__body_fill_${name}`}
        noValidate>
        {children}
        <button type="submit" className={`form__submit page__button ${isForAuth && 'form__submit_auth'}`}>
          {submitButtonText}
        </button>
      </form>
    </div>
  )
}

export default Form;