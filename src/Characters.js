import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import ListItem from "./ListItem";
import "./Characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [displayCard, setDisplayCard] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((chars) => {
        setCharacters(chars);
        setDisplayCard(chars[0]);
      });
  }, []);

  const displayList = characters.map((character) => {
    return (
      <ListItem
        key={character.name}
        character={character}
        setDisplayCard={setDisplayCard}
        displayCard={displayCard}
      />
    );
  });

  return (
    <div id="charContent">
      <div className="charBackground"></div>

      <ul id="charList">{displayList}</ul>

      <CharacterCard character={displayCard} />
    </div>
  );
}

export default Characters;
