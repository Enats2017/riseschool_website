const RightArrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="26"
    viewBox="0 0 33 26"
    fill="none"
    className={className}
  >
    <path
      d="M0 13H30.728M18.625 0C18.625 7.18558 25.0552 13 33.0019 13C25.0552 13 18.625 18.8146 18.625 26.0002"
      stroke="currentColor"  // ← makes the stroke dynamic
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);

export default RightArrow;
