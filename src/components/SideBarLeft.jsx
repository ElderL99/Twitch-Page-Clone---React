import { streamers, data } from "../DB/db";
import Gamecard from "./Gamecard";
import StreamersCard from "./Streames";

function SideBarLeft() {
  const recommendedGames = data.slice(0, 6);
  return (
    <section className="w-full p-2">
      <div className="lg:flex lg:justify-between lg:items-center">
        <h1 className="hidden  text-lg font-bold lg:block">For You</h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          focusable="false"
          aria-hidden="true"
          role="presentation"
          fill="white"
          className="hidden lg:block"
        >
          <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
        </svg>

        <div className="flex justify-center lg:hidden">
          <svg width="20" height="20" viewBox="0 0 20 20" role="img">
            <path
              fill="gray"
              d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z"
              className="lg:hidden"
            ></path>
          </svg>
        </div>
      </div>

      <main>
        <p className="hidden lg:block font-bold">Live Channels</p>
        <ul className="py-5 space-y-2">
          {streamers.map((user) => (
            <li key={user.name}>
              <StreamersCard
                name={user.name}
                game={user.game}
                image={user.image}
                viewers={user.viewers}
              />
            </li>
          ))}
          <a href="/">
            <p className="text-[#bf94ff] font-bold  text-sm hover:cursor-pointer hidden lg:block lg:py-4 ">
              Show More
            </p>
          </a>
        </ul>
      </main>

      <section>
        <p className="font-bold text-sm hover:cursor-pointer hidden lg:block ">
          Recommented Categories
        </p>
        <ul className="">
          <li>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/509658-30x42.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="col-span-1">
                <p>Just Chatting</p>
              </div>
              <div className="col-span-1">3</div>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </section>
  );
}

export default SideBarLeft;
