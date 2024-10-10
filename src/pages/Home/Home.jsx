// css
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

// components

export const Home = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ou busque por tags..." onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        <h1>posts..</h1>
      </div>
    </div>
  );
};

export default Home;
