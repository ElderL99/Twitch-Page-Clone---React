const Header = () => {
  return (
    <>
      <header className="lg:flex lg:justify-between lg:items-center bg-[#18181b] border-b-2 border-black p-1 h-13 ">
        <div className="lg:flex lg:justify-between   items-center gap-5 ">
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
          <p className="text-[#bf94ff] text-lg font-[500] ">Explorar</p>
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
        <div className="border  lg:flex justify-center items-center">
          <input
            type="text"
            className="w-full border bg-[#18181b] "
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="20"
            fill="none"
            stroke="white"
            stroke-width="2"
          >
            <circle cx="9" cy="9" r="6" />
            <line x1="14" y1="14" x2="18" y2="18" />
          </svg>
        </div>
        <div className="border border-red-600 bg-red-600">3</div>
      </header>
    </>
  );
};

export default Header;
