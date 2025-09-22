import menupuntos from "../../public/menu-puntos.png";
function Gamecard({ image, name, viewers, tags }) {
  return (
    <div className="bg-dark rounded-lg overflow-hidden ">
      {/* imagen responsiva con aspect ratio */}
      <div className="w-full aspect-[16/9] ">
        <img
          src={image}
          alt={name}
          className="w-full h-[20vh] object-cover transform transition-transform duration-300 origin-left hover:scale-110 "
        />
      </div>

      <div className="flex justify-between items-center mt-2 mb-1 px-2">
        <p className="text-white text-[13px] truncate">{name}</p>
        <img src={menupuntos} alt="menu" className="w-4 h-4 cursor-pointer" />
      </div>

      <p className="text-gray-400 text-[12px] mb-1 px-2">{`${viewers} viewers`}</p>

      <div className="text-gray-400 text-center bg-[#18181b] rounded-lg w-max text-xs mx-2 mb-2 px-1">
        {tags}
      </div>
    </div>
  );
}

export default Gamecard;
