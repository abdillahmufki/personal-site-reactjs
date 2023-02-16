import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Hero, Contact } from "./pages";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <div className="container-2xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
