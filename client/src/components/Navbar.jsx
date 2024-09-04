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
    <nav className="w-full p-3 flex justify-center items-center gap-3 md:gap-6">
      <div className="glassCard w-[80%] md:w-[70%] lg:w-[50%] overflow-hidden shadow-3xl rounded flex items-center p-2 gap-2">
        <img
          src={search}
          alt="search"
          className="w-[1.5rem] h-[1.5rem] font-extrabold"
        />
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCityInputData();
            }
          }}
          type="text"
          placeholder="Search your city..."
          className="focus:outline-none w-full text-[#212121] text-lg bg-transparent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <TemperatureTypeToggler unit={unit} setUnit={setUnit} />
    </nav>
  );
};

export default Navbar;
