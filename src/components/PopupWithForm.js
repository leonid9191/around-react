export function PopupWithForm({ title, name, isOpen, children, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
        ></button>
        <h2 className="popup__header">{title}</h2>
        <form name={name} className="form popup__form" noValidate>
          {/* <fieldset className="form__editor">
            <input
              id="name-input"
              type="text"
              placeholder="Name"
              name="name"
              minLength="2"
              maxLength="40"
              className="form__input form__input_content_name"
              required
            />
            <span className="name-input-error form__input-error"></span>
            <input
              id="job-input"
              type="text"
              placeholder="About me"
              name="about"
              minLength="2"
              maxLength="200"
              className="form__input form__input_content_job"
              required
            />
            <span className="job-input-error form__input-error"></span>
          </fieldset> */}
          {children}
          <button type="submit" className="form__button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
