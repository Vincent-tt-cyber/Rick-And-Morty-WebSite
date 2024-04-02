import React from "react";
import styles from "./CharacterCard.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const [episodes, setEpisodes] = React.useState([]);
  // const [isWindowOpen, setIsWindowOpen] = React.useState(false);

  const fetchEpisodes = (episode) => {
    episode.map((episodeUrl) => {
      axios.get(episodeUrl).then(({ data }) => {
        setEpisodes((prevEpisodes) => [...prevEpisodes, data]);
        // console.log(episodes[1]);
      });
    });
  };

  React.useEffect(() => {
    fetchEpisodes(character.episode);
  }, []);
  return (
    <div className={styles["character-card"]}>
      <div className={styles["character-card__img-cover"]}>
        <img
          src={character.image}
          alt={character.name}
          className={styles["character-card__img"]}
        />
      </div>
      <div className={styles["character-card-info"]}>
        <div className={styles["character-card__description"]}>
          <Link to={`/character/${character.id}`}>
            <h2 className={styles["character-card__title"]}>
              {character.name}
            </h2>
          </Link>
          <p
            className={styles["character-card__status"]}
            style={{
              color: character.status == "unknown" ? "#ccc" : "greenyellow",
            }}
          >
            {character.status} - {character.species}
          </p>
        </div>
        <div className={styles["character-card__description"]}>
          <p className={styles["character-card__location"]}>
            Last known location:
          </p>
          <h2 className={styles["character-card__location-name"]}>
            {character.location.name}
          </h2>
        </div>
        <div>
          <p className={styles["character-card__location"]}>Gender:</p>
          <h2 className={styles["character-card__location-name"]}>
            {/* {episodes.length > 0 && episodes[1].name} */}
            {character.gender}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
