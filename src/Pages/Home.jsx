import Header from "../UI/Header";

function Home() {
  return (
    <div className="h-screen">
      <Header
        slides={[
          {
            id: 1,
            image: "/public/Images/header-image-5.webp",
            text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
            buttonText: "سفارش آنلاین غذا",
          },
          {
            id: 2,
            image: "/public/Images/header-image-2.webp",
            text: "غذای دلخواه شما با بهترین کیفیت",
            buttonText: "اکنون سفارش دهید",
          },
          {
            id: 3,
            image: "/public/Images/header-image-3.webp",
            text: "تنوعی بی‌نظیر از غذاهای گیاهی",
            buttonText: "همین حالا سفارش دهید",
          },
          {
            id: 4,
            image: "/public/Images/header-image-4.webp",
            text: "غذاهایی متناسب با رژیم شما",
            buttonText: "سفارش دهید",
          },
          {
            id: 5,
            image: "/public/Images/header-image-1.webp",
            text: "لذت طعمی فراموش‌نشدنی",
            buttonText: "امروز امتحان کنید",
          },
        ]}
      />
    </div>
  );
}
export default Home;
