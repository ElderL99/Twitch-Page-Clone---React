const Header = () => {
  return (
    <>
      <header className=" flex justify-between items-center bg-[#18181b] border-b-2 border-black p-1 h-13 ">
        <div className="flex justify-between items-center gap-5 ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <polygon
                points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
                fill="#9146FF"
              />
              <polygon
                points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25"
                fill="#fff"
              />
              <path
                d="M20,14 L22,14 L22,20 L20,20 Z M27,14 L27,20 L25,20 L25,14 Z"
                fill="#9146FF"
              />
            </g>
          </svg>
          <p className="hidden md:block text-lg font-bold">Following</p>
          <a href="" className="md:hidden">
            <svg
              width="20px"
              height="20px"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
            >
              <path
                d="M9.171 4.171A4 4 0 0 0 6.343 3H6a4 4 0 0 0-4 4v.343a4 4 0 0 0 1.172 2.829L10 17l6.828-6.828A4 4 0 0 0 18 7.343V7a4 4 0 0 0-4-4h-.343a4 4 0 0 0-2.829 1.172L10 5l-.829-.829zm.829 10 5.414-5.414A2 2 0 0 0 16 7.343V7a2 2 0 0 0-2-2h-.343a2 2 0 0 0-1.414.586L10 7.828 7.757 5.586A2 2 0 0 0 6.343 5H6a2 2 0 0 0-2 2v.343a2 2 0 0 0 .586 1.414L10 14.172z"
                fill="white"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <p className=" hidden md:block text-[#bf94ff] text-lg font-bold ">
            Browse
          </p>
          <a href="" className="md:hidden">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <g>
                <path
                  d="M5 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2V4h8a2 2 0 0 0-2-2H5z"
                  fill="#bf94ff"
                />
                <path
                  d="M7 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8zm2 0h6v8H9V8z"
                  fill="#bf94ff"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 20 20"
              fill="white"
            >
              <circle cx="10" cy="4" r="2" />
              <circle cx="10" cy="10" r="2" />
              <circle cx="10" cy="16" r="2" />
            </svg>
          </a>
        </div>
        <div className="flex justify-between items-center gap-0.5">
          <input
            type="text"
            className="hidden md:flex lg:w-[300px] border border-r-0 bg-[#18181b] text-white p-1 rounded-l-md placeholder:flex placeholder:text-start placeholder:p-3 focus:border-[#bf94ff] focus:outline-none focus:ring-2 focus:ring-[#bf94ff] transition-colors duration-200"
            placeholder="Search"
          />
          <button className=" md:bg-[#2f2f35] rounded-r-md  rounded-l-none lg:flex lg:items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="white"
              stroke-width="2"
              className="hidden md:block size-9 p-1"
            >
              <circle cx="9" cy="9" r="6" />
              <line x1="14" y1="14" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex justify-between items-center gap-4 ">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="white"
                stroke-width="2"
                className="size-7 p-1 md:hidden"
              >
                <circle cx="9" cy="9" r="6" />
                <line x1="14" y1="14" x2="18" y2="18" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m3 12 7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
                />
              </svg>
            </li>
            <li>
              <button className="flex justify-center items-center p-1 rounded-full gap-1 bg-[#2f2f35]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z"
                  />
                </svg>

                <span className=" hidden  font-bold text-sm lg:block">
                  Go Ad-Free for Free
                </span>
              </button>
            </li>
            <li>
              <button className="lg:flex lg:items-center">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/bf6a04cf-3f44-4986-8eed-5c36bfad542b-profile_image-70x70.png"
                  alt="user"
                  className="rounded-full size-8"
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
