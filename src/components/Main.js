import { useEffect, useState } from "react";

import { api } from "../utils/api.js";
import Card from "./Card.js";

export function Main(props) {
  const [cards, setCards] = useState([]);
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  useEffect(() => {
    api.getUserInfo().then(({ name, about, avatar }) => {
      setUserAvatar(avatar);
      setUserDescription(about);
      setUserName(name);
    },)
    .catch((err) => {
      console.log(err);
    });

    api.getInitialCards().then((initialCards) => {
      setCards(initialCards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <img src={userAvatar ? userAvatar :'https://via.placeholder.com/150/00000?text=Avatar'} alt="avatar" className="profile__avatar-img" />
          <button
            onClick={props.onEditAvatarClick}
            className="profile__change-avatar-button"
          />
        </div>
        <div className="profile__description">
          <div className="profile__wrapper">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              type="button"
              className="profile__button-edit"
            />
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          type="button"
          className="profile__button-add"
        />
      </section>
      <section className="gallery">
        {cards.map((card) => (
          <Card 
          key={card._id} 
          card={card} 
          onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
