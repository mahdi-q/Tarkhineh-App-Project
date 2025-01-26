import { Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import AppProviders from "./Providers/AppProviders";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AppProviders>
      <Toaster />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
