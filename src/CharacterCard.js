import "./CharacterCard.css";

function CharacterCard({ character }) {
  //   const { name, image, town, address, birthday, favorites } = character;
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
        <p>Favorites:</p>
      </div>
    </div>
  );
}

export default CharacterCard;
