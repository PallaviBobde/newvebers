import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import Services from "./screens/Services";
import RoseDay from "./screens/RoseDay";
import HappyRoseDay from "./screens/HappyRoseDay";

function App() {
  return (
    <BrowserRouter classname="app">
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/roseday" element={<RoseDay />} />
          <Route
            path="/happyroseday/:firstName/:secondName"
            element={<HappyRoseDay />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
