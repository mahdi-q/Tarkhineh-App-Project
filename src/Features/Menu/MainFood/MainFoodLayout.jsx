import FilterSection from "../FilterSection";

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
  return (
    <div>
      <FilterSection filters={FILTERS} />

      <div className="h-screen"></div>
    </div>
  );
}
export default MainFoodLayout;
