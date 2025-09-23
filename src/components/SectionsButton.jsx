const SectionButton = (props) => {
  return (
    <button className="bg-[#5c16c5] flex text-lg justify-between items-center rounded-md h-12 px-3 space-x-4 font-bold hover:cursor-pointer mb-1 hover:bg-[#bf94ff]">
      {props.name}
      <img src={props.image} alt={props.name} className="size-13 " />
    </button>
  );
};

export default SectionButton;
