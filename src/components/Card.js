function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  } 
  return (
    <div key={card._id} className="card">
      <img onClick={handleClick} src={card.link} alt={card.name} className="card__image" />

      <button type="button" className="card__button-trash"></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-info">
          <button type="button" className="card__button-like"></button>
          <span className="card__likes-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
