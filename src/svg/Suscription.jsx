function Suscription({ color, stroke, className }) {
  return (
    <div className="p-2 rounded-full hover:bg-[#3a3a40] transition cursor-pointer">
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
    </div>
  );
}

export default Suscription;
