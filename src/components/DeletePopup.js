export function DeletePopup({ isOpen, onClose, onDeleteCard, card }) {
  function handleDeleteCard(e) {
    e.preventDefault();
    onDeleteCard(card);
    onClose();
  }

    return(
      <div className={`popup popup_type_delete-card-form ${isOpen ? "popup_opened" : ""}`}>
          <div className="popup__content">
            <button className="popup__close" onClick={onClose}></button>
            <form onSubmit={handleDeleteCard} className="form form_delete-card">
              <h1 className="form__heading">Are you sure?</h1>
              <button
                type="submit"
                className="form__button form__button_delete-card"
              >
                Yes
              </button>
            </form>
          </div>
        </div>
    )
}