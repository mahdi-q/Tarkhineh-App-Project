import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import AppProviders from "./Providers/AppProviders";
import { Toaster } from "react-hot-toast";
import NotFound from "./Pages/NotFound";
import SearchResult from "./Pages/SearchResult";
import EkbatanBranch from "./Pages/EkbatanBranch";
import BranchLayout from "./Pages/BranchLayout";
import AghdasiyehBranch from "./Pages/AghdasiyehBranch";
import VanakBranch from "./Pages/VanakBranch";
import ChalosBranch from "./Pages/ChalosBranch";
import MenuLayout from "./Pages/MenuLayout";
import MainFoodPage from "./Pages/MainFoodPage";
import AppetizerPage from "./Pages/AppetizerPage";
import DessertPage from "./Pages/DessertPage";
import DrinkPage from "./Pages/DrinkPage";
import FranchisePage from "./Pages/FranchisePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import FAQPage from "./Pages/FAQPage";
import RulesPage from "./Pages/RulesPage";

function App() {
  return (
    <AppProviders>
      <Toaster />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="branch" element={<BranchLayout />}>
            <Route index element={<Navigate to="ekbatan" replace />} />

            <Route path="ekbatan" element={<EkbatanBranch />} />
            <Route path="chalos" element={<ChalosBranch />} />
            <Route path="aghdasiyeh" element={<AghdasiyehBranch />} />
            <Route path="vanak" element={<VanakBranch />} />
          </Route>

          <Route path="menu" element={<MenuLayout />}>
            <Route index element={<Navigate to="main-food" replace />} />

            <Route path="main-food" element={<MainFoodPage />} />
            <Route path="appetizer" element={<AppetizerPage />} />
            <Route path="dessert" element={<DessertPage />} />
            <Route path="drink" element={<DrinkPage />} />
          </Route>

          <Route path="franchise" element={<FranchisePage />} />

          <Route path="about-us" element={<AboutUsPage />} />

          <Route path="contact-us" element={<ContactUsPage />} />

          <Route path="FAQ" element={<FAQPage />} />

          <Route path="rules" element={<RulesPage />} />

          <Route path="search-result" element={<SearchResult />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
