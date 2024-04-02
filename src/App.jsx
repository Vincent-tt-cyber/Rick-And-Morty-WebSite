import React from "react";
import axios from "axios";
import Loading from "./components/Loading/Loading";
import styles from "./styles/App.module.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CharacterPage from "./pages/CharacterPage";
function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/character/:id" element={<CharacterPage/>}/>
     </Routes>
    </>
  );
}

export default App;
