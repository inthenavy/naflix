import "./Buscador.css";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Buscador = () => {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate(`/?search=${searchText}`);
  };
  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
      {" "}
      {}
      <div className="buscadorBox">
        <input
          type="text"
          className="buscadorInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="buscadorButton">
          <ImSearch />
        </button>
      </div>
    </form>
  );
};
