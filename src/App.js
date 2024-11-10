import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Servicess/service';
import About from './components/About/about';
import Certification from './components/Certification/certification';
import Certified from './components/Certified/certified';
import TopChoice from './components/TopChoice/top-choice';
import FoodGallery from './components/FoodGallery/food-gallery';
import FindOutlet from './components/FindOutlet/find-outlet';
import Footer from './components/Footer/footer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/certification" element={<Certification />} />
      <Route path="/certified" element={<Certified />} />
      <Route path="/top-choice" element={<TopChoice />} />
      <Route path="/food-gallery" element={<FoodGallery />} />
      <Route path="/find-outlet" element={<FindOutlet />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
