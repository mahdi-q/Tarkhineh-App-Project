import { Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import AppProviders from "./Providers/AppProviders";
import { Toaster } from "react-hot-toast";
import NotFound from "./Pages/NotFound";
import SearchResult from "./Pages/SearchResult";

function App() {
  return (
    <AppProviders>
      <Toaster />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="search-result" element={<SearchResult/>} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
