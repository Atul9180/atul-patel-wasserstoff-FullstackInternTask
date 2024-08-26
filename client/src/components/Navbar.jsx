import React, { useState } from "react";
import search from "../assets/icons/search.svg";
import TemperatureTypeToggler from "./TemperatureTypeToggler";
import { useStateContext } from "../context/StateContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [input, setInput] = useState("");
  const { setPlace, unit, setUnit } = useStateContext();

  const submitCityInputData = () => {
    if (input.trim() === "") {
      toast.error("City field cannot be left blank.");
    } else {
      setPlace(input.trim());
      toast.success(`Searching for city: ${input.trim()}`);
      setInput("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-search">
        <img src={search} alt="search" className="search-icon" />
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCityInputData();
            }
          }}
          type="text"
          placeholder="Search your city..."
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <TemperatureTypeToggler unit={unit} setUnit={setUnit} />
    </nav>
  );
};

export default Navbar;
