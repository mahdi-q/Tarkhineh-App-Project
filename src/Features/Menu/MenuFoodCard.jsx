import HeartIcon from "../../Icons/HeartIcon";
import Rate from "../../UI/Rate";

function MenuFoodCard({ food }) {
  return (
    <div className="flex h-[110px] w-full rounded border border-gray-400 transition-all duration-300 hover:shadow-md hover:shadow-gray-400 lg:h-[160px]">
      <div className="h-full w-[30%] min-w-[30%] overflow-hidden rounded-r">
        <img
          src={food.image}
          alt={food.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-1 px-2 py-2.5 lg:gap-2 lg:px-4">
        <div className="flex h-full justify-between gap-2">
          <div className="flex flex-col justify-between gap-2 text-gray-800">
            <h3 className="text-sm lg:text-xl lg:font-semibold">
              {food.title}
            </h3>

            <p className="max-w-36 truncate text-xs md:max-w-none lg:max-w-36 lg:text-sm xl:max-w-none xl:text-wrap">
              {food.detail}
            </p>
          </div>

          <div className="flex flex-col items-end justify-between gap-1">
            <button className="hidden lg:block">
              <HeartIcon className="h-6 w-6 transition-all duration-200 hover:stroke-error-200" />
            </button>

            {food.discount ? (
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500 line-through lg:text-base">
                  {food.main_price}
                </span>

                <span className="badge-error">{food.discount}</span>
              </div>
            ) : (
              <div></div>
            )}

            <span className="text-nowrap text-left text-xs text-gray-800 lg:text-lg">
              {food.price} تومان
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 lg:gap-6">
          <button className="lg:hidden">
            <HeartIcon className="h-4 w-4 transition-all duration-200 hover:stroke-error-200" />
          </button>

          <Rate rate={food.rate} />

          <button className="primary-button flex-1 p-2 text-xs lg:text-base lg:font-medium">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
export default MenuFoodCard;
