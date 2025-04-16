import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Catego from './pages/catego';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Product1 from './pages/product1';
import Product2 from './pages/product2';
import Product3 from './pages/product3';
import Product4 from './pages/product4';
import Product5 from './pages/product5';
import Product6 from './pages/product6';
import Product7 from './pages/product7';
import Product8 from './pages/product8';
import Product9 from './pages/product9';
import Product10 from './pages/product10';
import Product11 from './pages/product11';
import Product12 from './pages/product12';
import Product13 from './pages/product13';
import Product14 from './pages/product14';
import Product15 from './pages/product15';


// import './App.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out when scrolling past them
    });

    // Refresh animations on scroll
    window.addEventListener("scroll", AOS.refresh);

    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catego" element={<Catego />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
        <Route path="/product5" element={<Product5 />} />
        <Route path="/product6" element={<Product6 />} />
        <Route path="/product7" element={<Product7 />} />
        <Route path="/product8" element={<Product8 />} />
        <Route path="/product9" element={<Product9 />} />
        <Route path="/product10" element={<Product10 />} />
        <Route path="/product11" element={<Product11 />} />
        <Route path="/product12" element={<Product12 />} />
        <Route path="/product13" element={<Product13 />} />
        <Route path="/product14" element={<Product14 />} />
        <Route path="/product15" element={<Product15 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
