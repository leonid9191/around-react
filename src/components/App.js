import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { ImagePopup } from "./ImagePopup.js";
import { useState } from "react";

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

  const handleEditAvatarClick = () => {
    const popupElement = document.querySelector(".popup_type_edit-avatar");
    popupElement.classNameList.add("popup_opened");
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    const popupElement = document.querySelector(".popup_type_add-card");
    popupElement.classNameList.add("popup_opened");
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    // const popupElement = document.querySelector(".popup_type_add-card");
    // popupElement.classNameList.add("popup_opened");
  };

  return (
    <div className="App">
      <body className="page">
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
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <Footer />
        
        {/* <!-- Edit Modal Window --> */}
        {/* <div className="popup popup_type_edit-profile">
          <div className="popup__content">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__header">Edit profile</h2>
            <form name="profile" className="form popup__form" novalidate>
              <fieldset className="form__editor">
                <input
                  id="name-input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  minlength="2"
                  maxlength="40"
                  className="form__input form__input_content_name"
                  required
                />
                <span className="name-input-error form__input-error"></span>
                <input
                  id="job-input"
                  type="text"
                  placeholder="About me"
                  name="about"
                  minlength="2"
                  maxlength="200"
                  className="form__input form__input_content_job"
                  required
                />
                <span className="job-input-error form__input-error"></span>
              </fieldset>
              <button type="submit" className="form__button">
                Save
              </button>
            </form>
          </div>
        </div> */}

        {/* <!-- Add New Card Modal Window --> */}
        {/* <div className="popup popup_type_add-card">
          <div className="popup__content">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__header">New place</h2>
            <form name="profile" className="form popup__form" novalidate>
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
              <button type="submit" className="form__button">
                Save
              </button>
            </form>
          </div>
        </div> */}
        {/* <!-- Edit Avatar Modal Window --> */}
        {/* <div className="popup popup_type_edit-avatar">
          <div className="popup__content">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__header">Change profile picture</h2>
            <form name="profile" className="form popup__form" novalidate>
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
              <button type="submit" className="form__button">
                Save
              </button>
            </form>
          </div>
        </div> */}

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

        
      </body>
    </div>
  );
}

export default App;
