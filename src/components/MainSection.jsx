import { useState } from "react";
import SectionButton from "./SectionsButton";
import { data, buttons } from "../DB/db.js";
import Gamecard from "./Gamecard.jsx";

function Mainsection() {
  const [Category, setCategory] = useState("recommended");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // filter by selet
  const sortedData =
    Category === "viewers"
      ? [...data].sort((a, b) => b.viewers - a.viewers)
      : data;

  // filter by Name
  const gamesToRender = sortedData.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-6xl font-[500] mb-6">Browse</h1>

      {/* 🔹 Botones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6  mx-auto lg:">
        {buttons.map((button) => (
          <SectionButton
            key={button.name}
            name={button.name}
            image={button.image}
          />
        ))}
      </div>

      {/* 🔹 Tabs */}
      <div className="flex gap-6 mb-6">
        <a
          href="#"
          className="text-[#bf94ff] text-md flex flex-col items-center gap-2 border-b-2 border-[#bf94ff] hover:cursor-pointer"
        >
          Categories
        </a>
        <a
          href="#"
          className="text-[#bf95ff] text-md flex flex-col items-center gap-2"
        >
          Live Channels
        </a>
      </div>

      {/* 🔹 Filtros */}
      <section className="mb-8  ">
        <div className="md:flex md: justify-between">
          {/* Input */}
          <div className="">
            <input
              type="text"
              className="bg-[#18181b] rounded-lg w-[250px] border border-gray-100 placeholder:px-4 "
              placeholder="Search Category Tags"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Sort By + Select */}
          <div className="flex items-center gap-3 ">
            <p className="font-bold">Sort By</p>
            <select
              name="filterByRecomendation"
              id="filterByRecomendation"
              className="bg-[#18181b] rounded-lg border p-1"
              value={Category}
              onChange={handleChange}
            >
              <option value="recommended">Recommended For You</option>
              <option value="viewers">Viewers High or Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* 🔹 Cards */}
      <section
        id="printCard"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-[repeat(auto-fit,minmax(150px,2fr))] gap-3 w-full"
      >
        {gamesToRender.map((game, index) => (
          <Gamecard
            key={index}
            image={game.image}
            name={game.name}
            viewers={game.viewers}
            tags={game.tags}
          />
        ))}
      </section>
    </>
  );
}

export default Mainsection;
