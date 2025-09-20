import { useState } from "react";
import SectionButton from "./SectionsButton";
import { data, buttons } from "../DB/db.js";
import Gamecard from "./Gamecard.jsx";

function Mainsection() {
  const [Category, setCategory] = useState("recommended");

  return (
    <>
      <h1 className="text-5xl font-[500] mb-6">Browse</h1>

      {/* 🔹 Botones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6 max-w-screen-lg mx-auto">
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
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input */}
          <input
            type="text"
            className="bg-[#18181b] col-span-1 md:col-span-2 w-full h-8 px-3 border rounded placeholder:text-center placeholder:text-sm"
            placeholder="Search Category Tags"
          />

          {/* Sort By + Select */}
          <div className="flex items-center gap-2 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-[#efeff1] text-sm">Sort By</span>
            <select
              name="filterByRecomendation"
              id="filterByRecomendation"
              className="bg-[#18181b] rounded-lg border w-full md:w-[200px] h-[32px] text-sm text-white"
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
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full"
      >
        {data.map((game, index) => (
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
