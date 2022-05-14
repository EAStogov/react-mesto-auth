function PopupWithForm({
  name,
  title,
  isOpen,
  children,
  submitButtonText,
  onClose,
  onSubmit,
}) {
  return (
    <section
      id={`${name}-popup`}
      className={`popup ${isOpen && "popup_opened"}`}
    >
      <div className="popup__container">
        <h2 className="popup__heading">{title}</h2>
        <form
          action="url"
          onSubmit={onSubmit}
          name={`popup__form-${name}`}
          className={`popup__form popup__form_fill_${name}`}
          noValidate
        >
          {children}
          <button type="submit" className="popup__submit page__button">
            {submitButtonText}
          </button>
        </form>
        <button
          aria-label
          type="button"
          className="popup__close page__button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
