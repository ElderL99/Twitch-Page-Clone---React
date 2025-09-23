function StreamersCard({ image, name, game, viewers }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center py-1 lg:py-0 lg:gap-4  hover:cursor-pointer">
      {/* Columna 1: Imagen */}
      <img src={image} alt={name} className="w-8 h-8 rounded-full" />

      {/* Columna 2: Name + Game */}
      <div className="hidden lg:block">
        <p className="text-white text-sm font-semibold">{name}</p>
        <span className="text-gray-400 text-sm">{game}</span>
      </div>

      {/* Columna 3: Viewers */}
      <div className="hidden lg:flex lg:items-center gap-1">
        <p className="w-2 h-2 bg-red-700 border border-red-700 rounded-full"></p>
        <p className="text-white text-sm text-right">{viewers} K</p>
      </div>
    </div>
  );
}

export default StreamersCard;
