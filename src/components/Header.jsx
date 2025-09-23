import Logo from "../svg/Logo";

import Heard from "../svg/Heard";
import Papers from "../svg/TwoPapers";
import Puntos from "../svg/puntos";
import Lupa from "../svg/Lupa";
import Corona from "../svg/Corona";
import Message from "../svg/Message";
import Chat from "../svg/Chat";
import Suscription from "../svg/Suscription";
import Battery from "../svg/Battery";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-[#18181b] border-b border-[#2f2f35] h-14  ">
        {/* Izquierda */}
        <div className="flex justify-between items-center gap-1.5">
          <Logo />
          <p className="hidden md:block text-lg font-bold hover:text-[#bf94ff] cursor-pointer transition-colors duration-200">
            Following
          </p>
          <a href="" className="md:hidden">
            <Heard />
          </a>
          <p className="hidden md:block text-[#bf94ff] text-lg font-bold cursor-pointer hover:opacity-80 transition-colors duration-200">
            Browse
          </p>
          <a href="" className="md:hidden hover:opacity-80 transition">
            <Papers />
          </a>
          <a href="" className="hover:opacity-80 transition">
            <Puntos />
          </a>
        </div>

        {/* Centro - Buscador */}
        <div className="flex justify-between items-center gap-0.5">
          <input
            type="text"
            className="hidden md:flex lg:w-[300px] bg-[#0e0e10] text-white px-3 py-1 rounded-l-md border border-[#2f2f35] placeholder:text-gray-400 focus:border-[#bf94ff] focus:ring-1 focus:ring-[#bf94ff] outline-none text-sm transition"
            placeholder="Search"
          />
          <Lupa
            classButton="hidden md:bg-[#2f2f35] rounded-r-md lg:flex lg:items-center hover:bg-[#3a3a40]"
            fill={"white"}
            stroke={"white"}
            classSvg={"size-7"}
          />
        </div>

        {/* Derecha */}
        <div className="flex justify-between items-center">
          <ul className="flex items-center gap-3">
            <li>
              <Lupa
                classButton={
                  "p-2 rounded-full hover:bg-[#3a3a40] transition cursor-pointer lg:hidden"
                }
                fill={"none"}
                classSvg={"flex size-5 lg:hidden"}
                stroke={"white"}
              />
            </li>
            <li>
              <div className="p-2 rounded-full hover:bg-[#3a3a40] transition cursor-pointer">
                <Corona />
              </div>
            </li>
            <li>
              <Message />
            </li>
            <li>
              <Chat />
            </li>
            <li>
              <Suscription />
            </li>

            {/* Botón original “Go Ad-Free for Free” */}
            <li>
              <button className="flex justify-center items-center px-3 py-1 rounded-full gap-1 bg-[#2f2f35] hover:bg-[#3a3a40] transition">
                <Battery />

                <span className="hidden font-bold text-sm  md:hidden lg:flex  lg:justify-between">
                  Go Ad-Free for Free
                </span>
              </button>
            </li>

            {/* Botón de usuario */}
            <li className="sm:w-10">
              <button>
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/bf6a04cf-3f44-4986-8eed-5c36bfad542b-profile_image-70x70.png"
                  alt="user"
                  className="size-10 rounded-full"
                />
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
