import Form from "./Form";
function PopupWithForm({
  name,
  title,
  isOpen,
  children,
  submitButtonText,
  onClose,
  onSubmit,
  isForAuth
}) {
  return (
    <section
      id={`${name}-popup`}
      className={`popup ${isOpen  && "popup_opened"}`}>
        <Form name={name} title={title} onSubmit={onSubmit} isForAuth={isForAuth} submitButtonText={submitButtonText} onClose={onClose}>
          {children}
        <button
          aria-label
          type="button"
          className="popup__close page__button"
          onClick={onClose}
          style={isForAuth && {display: "none"}}
        ></button>
        </Form>
      {/* <div className="popup__container" style={isForAuth && {backgroundColor: "black", color: "white"}}>
        <h2 className="popup__heading">{title}</h2>
        <form
          action="url"
          onSubmit={onSubmit}
          name={`popup__form-${name}`}
          className={`popup__form popup__form_fill_${name}`}
          noValidate
        >
          {children}
          <button type="submit" className="popup__submit page__button" style={isForAuth && {backgroundColor: "white", color: "black"}}>
            {submitButtonText}
          </button>
        </form> 
      </div>*/ }
    </section>
  );
}

export default PopupWithForm;
