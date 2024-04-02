import React from "react";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ character }) => {
  const [episodes, setEpisodes] = React.useState([]);

  const fetchEpisodes = (episode) => {
    episode.map((item)=> console.log(item));
  };

  React.useEffect(() => {
    fetchEpisodes(character.episode)

  }, []);
  return (
    <div className={styles["character-card"]}>
      <img src={character.image} alt={character.name} width={"50%"} />
      <div className={styles["character-card-info"]}>
        <div>
          <h2 className={styles["character-card__title"]}>{character.name}</h2>
          <p>
            {character.status} - {character.species}
          </p>
        </div>
        <div>
          <p>Last:</p>

          <h2 className={styles["character-card__location"]}>
            {character.location.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
