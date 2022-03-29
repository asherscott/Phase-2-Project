import CharacterCard from "./CharacterCard";
import "./Characters.css";

function Characters() {
  return (
    <div id="charContent">
      <div className="charBackground"></div>

      <div id="charBody">
        <div className="charCards">
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
    </div>
  );
}

export default Characters;
