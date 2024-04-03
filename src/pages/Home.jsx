import axios from "axios";
import React from "react";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import styles from "../styles/App.module.css";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const fetchCharacters = () => {
    setIsLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(({ data }) => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  React.useEffect(() => {
    fetchCharacters();
  }, [page]);
  return (
    <div className="container">
      <div className={styles["main-grid-laoyout"]}>
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div>
        {/* <button onClick={handlePrevPage}>Предыдущая страница</button> */}
        <button onClick={handleNextPage}>Следующая страница</button>
      </div>
    </div>
  );
};

export default Home;
