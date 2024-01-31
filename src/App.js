import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import Services from "./screens/Services";
import ValentineDiary from "./screens/ValentineDiary";

function App() {
  return (
    <BrowserRouter classname="app">
          <div className='page'>
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/ValentineDiary" element={<ValentineDiary />} />
          </Routes>
       

      </div>
    </BrowserRouter>
  );
}

export default App;
