function MenuCard({ image, alt, text, onClick }) {
  return (
    <div className="relative h-20 w-[140px] rounded bg-primary shadow-lg md:h-32 md:w-[210px] lg:rounded-lg xl:h-40 xl:w-72">
      <img
        src={image}
        alt={alt}
        className="absolute -top-14 left-1/2 h-[120px] w-[120px] -translate-x-1/2 md:-top-20 md:h-[180px] md:w-[180px] xl:-top-28 xl:h-[240px] xl:w-[240px]"
      />
      <button
        onClick={onClick}
        className="white-button absolute -bottom-5 left-1/2 -translate-x-1/2"
      >
        {text}
      </button>
    </div>
  );
}
export default MenuCard;
