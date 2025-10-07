function RectangleIcon({ size = 20, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.414214"
        y="10"
        width="14"
        height="14"
        rx="3"
        transform="rotate(-45 0.414214 10)"
        stroke="#417F56"
        strokeWidth="2"
      />
    </svg>
  );
}
export default RectangleIcon;
