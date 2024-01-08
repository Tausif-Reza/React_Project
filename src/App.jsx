import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/header";
// import Home from "./components/home";
import About from "./components/about/about";
import Contact from "./components/contact";
import Navbar from "./components/Navbar";
import Services from "./components/services";
import Home from "./components/home";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React from "react";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return <Navbar />;
// };

// export default App;
