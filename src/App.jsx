import { Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
