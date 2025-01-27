import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
export default AppLayout;
