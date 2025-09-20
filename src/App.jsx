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

          <Route path="search-result" element={<SearchResult />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
