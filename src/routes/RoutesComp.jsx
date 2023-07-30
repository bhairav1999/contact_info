import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Header from "../layouts/header/Header";
const RoutesComp = () => {
  return (
    <div>
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesComp;
