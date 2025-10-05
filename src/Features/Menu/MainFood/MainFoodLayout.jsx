import { useMenu } from "../../../Contexts/MenuContext";
import CartIcon from "../../../Icons/CartIcon";
import FilterSection from "../FilterSection";
import MenuFoodCard from "../MenuFoodCard";

const FILTERS = [
  {
    key: "category",
    value: "persian-foods",
    label: "غذاهای ایرانی",
  },
  {
    key: "category",
    value: "forign-foods",
    label: "غذاهای غیر ایرانی",
  },
  {
    key: "category",
    value: "pizza",
    label: "پیتزاها",
  },
  {
    key: "category",
    value: "sandwich",
    label: "ساندویچ‌ها",
  },
  {
    key: "sort",
    value: "bestseller",
    label: "پرفروش‌ترین",
  },
  {
    key: "sort",
    value: "economical",
    label: "اقتصادی‌ترین",
  },
  {
    key: "sort",
    value: "popular",
    label: "محبوب‌ترین",
  },
];

function MainFoodLayout() {
  const { mainFood } = useMenu();

  return (
    <div>
      <FilterSection filters={FILTERS} />

      <div className="container mx-auto mb-6 flex flex-col gap-6 lg:mb-12 lg:gap-12">
        <div>
          <div className="mb-3 flex items-center justify-between lg:mb-5">
            <h2 className="font-bold text-gray-800 lg:text-2xl">
              غذاهای ایرانی
            </h2>

            <button className="outline-primary-button lg:px-4">
              <CartIcon className="h-4 w-4 lg:h-6 lg:w-6" />

              <span className="text-sm lg:text-base lg:font-medium">
                تکمیل خرید
              </span>
            </button>
          </div>

          {mainFood.persian_foods && mainFood.persian_foods.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
              {mainFood.persian_foods.map((item) => (
                <MenuFoodCard key={item.id} food={item} />
              ))}
            </div>
          ) : (
            <p className="my-6 text-center text-gray-500">
              هیچ غذای ایرانی یافت نشد.
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
            غذاهای غیر ایرانی
          </h2>

          {mainFood.foreign_foods && mainFood.foreign_foods.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
              {mainFood.foreign_foods.map((item) => (
                <MenuFoodCard key={item.id} food={item} />
              ))}
            </div>
          ) : (
            <p className="my-6 text-center text-gray-500">
              هیچ غذای غیر ایرانی یافت نشد.
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
            پیتزاها
          </h2>

          {mainFood.pizzas && mainFood.pizzas.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
              {mainFood.pizzas.map((item) => (
                <MenuFoodCard key={item.id} food={item} />
              ))}
            </div>
          ) : (
            <p className="my-6 text-center text-gray-500">
              هیچ پیتزایی یافت نشد.
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-3 font-bold text-gray-800 lg:mb-5 lg:text-2xl">
            ساندویچ‌ها
          </h2>

          {mainFood.sandwiches && mainFood.sandwiches.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
              {mainFood.sandwiches.map((item) => (
                <MenuFoodCard key={item.id} food={item} />
              ))}
            </div>
          ) : (
            <p className="my-6 text-center text-gray-500">
              هیچ ساندویچی یافت نشد.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default MainFoodLayout;
