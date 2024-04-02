import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";
import styles from "../styles/CharacterPage.module.css";

const CharacterPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [characterInfo, setCharacterInfo] = React.useState();
  const { id } = useParams();
  // console.log(id);

  const fetchCharacterInfo = () => {
    setIsLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        // console.log(data);
        setCharacterInfo(data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    fetchCharacterInfo();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="container">
          <div>
            <Link className={styles["back"]} to={"/"}>
              Back
            </Link>
          </div>
          <div className={styles["character-page__info"]}>
            <div className={styles["character-page__description"]}>
              <div className={styles["character-page-avatar"]}>
                <img
                  className={styles["character-page-avatar__img"]}
                  src={characterInfo.image}
                  alt={characterInfo.name}
                />
              </div>
              <div className={styles["character-page-textblock"]}>
                <div>
                  <h1 className={styles["character-page__name"]}>
                    {characterInfo.name}
                  </h1>
                  <p>
                    {characterInfo.status} - {characterInfo.species}
                  </p>
                </div>
                <div>
                  <h1 className={styles["character-page__name"]}>
                    {characterInfo.location.name}
                  </h1>
                  <p>
                    {characterInfo.status} - {characterInfo.species}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CharacterPage;
