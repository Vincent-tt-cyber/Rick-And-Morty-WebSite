import React from "react";
import axios from "axios";
import Loading from "./components/Loading/Loading";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import styles from "./styles/App.module.css";
function App() {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(2);

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

  React.useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
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
      </div>
    </>
  );
}

export default App;
