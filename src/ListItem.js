import "./ListItem.css";

function ListItem({ character, setDisplayCard, displayCard }) {
  function handleClick() {
    setDisplayCard(character);
  }

  return (
    <li
      onClick={handleClick}
      className={
        displayCard.name === character.name
          ? "charSelected listItem"
          : "listItem"
      }
    >
      <img className="smallImg" src={character.image} />
      <span className="name">{character.name}</span>
      <img
        className="selected"
        src="https://stardewvalleywiki.com/mediawiki/images/5/57/Junimo.gif"
      />
    </li>
  );
}

export default ListItem;
