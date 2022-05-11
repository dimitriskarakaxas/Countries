import { Routes, Route } from "react-router-dom";

import AppWrapper from "./components/UI/AppWrapper";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
