import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
export default function App() {
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
}
