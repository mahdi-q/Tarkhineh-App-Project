import About from "../Features/Home/About";
import BranchCards from "../Features/Home/BranchCards";
import MenuCards from "../Features/Home/MenuCards";
import Header from "../UI/Header";

function Home() {
  return (
    <div className="">
      <Header
        slides={[
          {
            id: 1,
            image:
              "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-5.webp",
            text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
            buttonText: "سفارش آنلاین غذا",
          },
          {
            id: 2,
            image:
              "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-2.webp",
            text: "غذای دلخواه شما با بهترین کیفیت",
            buttonText: "اکنون سفارش دهید",
          },
          {
            id: 3,
            image:
              "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-3.webp",
            text: "تنوعی بی‌نظیر از غذاهای گیاهی",
            buttonText: "همین حالا سفارش دهید",
          },
          {
            id: 4,
            image:
              "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-4.webp",
            text: "غذاهایی متناسب با رژیم شما",
            buttonText: "سفارش دهید",
          },
          {
            id: 5,
            image:
              "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/main-1.webp",
            text: "لذت طعمی فراموش‌نشدنی",
            buttonText: "امروز امتحان کنید",
          },
        ]}
      />

      <MenuCards />

      <About />

      <BranchCards/>
    </div>
  );
}
export default Home;
