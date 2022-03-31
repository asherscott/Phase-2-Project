import "./CharacterCard.css";

function CharacterCard({ character }) {
  const renderFavs = character.favorites
    ? character.favorites.map((fav) => {
        return (
          <li className="favItem" key={Object.keys(fav)[0]}>
            <img className="favImg" src={Object.values(fav)[0]} />
            <span>{Object.keys(fav)[0]}</span>
          </li>
        );
      })
    : null;

  return (
    <div className="card">
      <div className="top">
        <div className="photo">
          <p className="cardName">{character.name}</p>
          <img id="photoId" src={character.image} alt={character.name} />
        </div>

        <div className="idInfo">
          <p className="town">{character.town}</p>
          <p className="address">Address: {character.address}</p>
          <p className="birthday"> Birthday: {character.birthday}</p>
        </div>
      </div>

      <div className="bottom">
        <ul>Favorites: {renderFavs}</ul>
      </div>
    </div>
  );
}

export default CharacterCard;
