function Lupa({ color, stroke, classButton, classSvg }) {
  return (
    <button className={classButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={color}
        stroke={stroke}
        className={classSvg}
      >
        <circle cx="9" cy="9" r="6" />
        <line x1="14" y1="14" x2="18" y2="18" />
      </svg>
    </button>
  );
}

export default Lupa;
