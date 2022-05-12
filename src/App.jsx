import { Routes, Route } from "react-router-dom";

import AppWrapper from "./components/UI/AppWrapper";
import Home from "./pages/Home";
import Country from "./pages/Country";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <AppWrapper>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryId" element={<Country />} />
        </Routes>
      </ScrollToTop>
    </AppWrapper>
  );
}

export default App;
