import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
export default AppLayout;
