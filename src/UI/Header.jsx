import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

function Header({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(goToPreviousSlide, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, isSliding]);

  const goToNextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsSliding(false), 500);
  };

  const goToPreviousSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsSliding(false), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToPreviousSlide,
    onSwipedRight: goToNextSlide,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      className="relative min-h-44 w-full bg-cover bg-center transition-all duration-300 ease-in-out md:min-h-60 lg:min-h-80"
    >
      <div className="backdrop-brightness-40 h-full w-full bg-black/50">
        <div className="flex min-h-44 flex-row flex-wrap content-end items-start justify-between pb-[50px] text-white md:min-h-60 md:px-4 md:pb-[55px] lg:min-h-80 lg:pb-[70px]">
          <button
            onClick={goToPreviousSlide}
            className={
              slides.length > 1 ? "opacity-0 md:opacity-100" : "opacity-0"
            }
          >
            <HiChevronRight className="icon hover:text-primary" />
          </button>

          <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
            <h1 className="text-center text-lg font-semibold md:text-2xl md:font-bold">
              {slides[currentSlide].text}
            </h1>

            <button
              onClick={() => navigate("/menu/main-food")}
              className={
                slides[currentSlide].buttonText
                  ? "primary-button"
                  : "mb-4 opacity-0 md:mb-8 lg:mb-10"
              }
            >
              {slides[currentSlide].buttonText}
            </button>
          </div>

          <button
            onClick={goToNextSlide}
            className={
              slides.length > 1 ? "opacity-0 md:opacity-100" : "opacity-0"
            }
          >
            <HiChevronLeft className="icon hover:text-primary" />
          </button>
        </div>

        <div
          className={`${slides.length > 1 ? "" : "opacity-0"} rounde absolute -bottom-1 left-1/2 flex -translate-x-1/2 transform items-center gap-x-2 rounded-t-lg bg-white px-4 py-2 md:px-6`}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "h-3 w-3 bg-primary" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Header;
