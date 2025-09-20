const SectionButton = (props) => {
  return (
    <button className="bg-[#5c16c5] flex text-lg justify-around items-center rounded-md h-10 w-full font-bold hover:cursor-pointer mb-1">
      {props.name}
      <img src={props.image} alt={props.name} className="size-12" />
    </button>
  );
};

export default SectionButton;
