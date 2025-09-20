import menupuntos from "../../public/menu-puntos.png";
function Gamecard(data) {
  return (
    <>
      <div className="bg-dark rounded-lg ">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-[200px] object-cover mb-2"
        />
        <div className="flex justify-between items-center mt-2 mb-2">
          <p className="text-white text-[13px]">{data.name}</p>
          <img src={menupuntos} alt="menu" className="size-4 cursor-pointer" />
        </div>
        <p className="text-gray-400 text-[12px] mb-1">{`${data.viewers}  viewers `}</p>
        <div
          id="tags"
          className="text-gray-400  text-center bg-[#18181b] rounded-lg  w-8 text-xs"
        >
          {data.tags}
        </div>
      </div>
    </>
  );
}

export default Gamecard;
