import { GoHeart } from "react-icons/go";
import Star from "./Star";

function FoodCard({ food }) {
  const { image, title, main_price, discount, price, rate, score } = food;

  return (
    <div className="max-w-[198px] rounded border border-gray-400 transition-all duration-300 ease-in-out hover:border-primary lg:max-w-[288px] lg:rounded-lg">
      <img
        className="h-[120px] w-full rounded-t object-cover lg:h-[256px] lg:rounded-t-lg"
        src={image}
        alt={title}
      />

      <div className="flex flex-col items-center justify-between p-2 lg:p-4">
        <h4 className="mb-1 font-medium lg:mb-2 lg:text-lg lg:font-semibold">
          {title}
        </h4>

        <div className="flow-row mb-2 flex w-full items-center justify-between lg:mb-4">
          <div className="space-y-1 lg:space-y-2">
            <div className="flow-row flex items-center gap-1 text-gray-500">
              <span>
                <GoHeart className="h-4 w-4" />
              </span>

              <span className="hidden text-xs lg:inline-block">
                افزودن به علاقمندی‌ها
              </span>
            </div>

            <div className="flow-row flex items-center gap-1 text-sm">
              <span>
                <Star rate={rate} />
              </span>

              <span>{rate}</span>

              <span className="hidden text-xs text-gray-500 lg:inline-block">
                ({score} امتیاز)
              </span>
            </div>
          </div>

          <div className="space-y-1 lg:space-y-2">
            <div className="flex flex-row items-center justify-end gap-x-1">
              <span
                className={`${main_price ? "block" : "hidden"} text-xs text-gray-500 line-through`}
              >
                {main_price}
              </span>

              <span
                className={`${discount ? "block" : "hidden"} rounded-full bg-error-100 px-2 py-[2px] text-xs font-semibold text-error-300 lg:text-sm`}
              >
                {discount}
              </span>
            </div>

            <span className="text-sm font-medium lg:text-base">
              {price} تومان
            </span>
          </div>
        </div>

        <button className="primary-button w-full">افزودن به سبد خرید</button>
      </div>
    </div>
  );
}
export default FoodCard;
