import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { ImagePopup } from "./ImagePopup.js";
import { useState, useEffect } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleDeleteCardClick = () => {
    setIsDeleteCardPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  return (
    <>
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        buttonText="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__editor">
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
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="New place"
        buttonText="Save"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__editor">
          <input
            id="title-input"
            type="text"
            placeholder="Title"
            name="name"
            className="form__input form__input_content_title"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="title-input-error form__input-error"></span>
          <input
            id="link-input"
            type="url"
            placeholder="Image link"
            name="link"
            className="form__input form__input_content_link"
            required
          />
          <span className="link-input-error form__input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Change profile picture"
        buttonText="Save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__editor">
          <input
            id="link-avatar"
            type="url"
            placeholder="Image link"
            name="link"
            className="form__input form__input_content_link"
            required
          />
          <span className="link-avatar-error form__input-error"></span>
        </fieldset>
      </PopupWithForm>

      <Footer />

      {/* <div className="popup popup_type_delete-card-form">
          <div className="popup__content">
            <button className="popup__close"></button>
            <form className="form form_delete-card">
              <h1 className="form__heading">Are you sure?</h1>
              <button
                type="submit"
                className="form__button form__button_delete-card"
              >
                Yes
              </button>
            </form>
          </div>
        </div> */}
    </>
  );
}

export default App;
