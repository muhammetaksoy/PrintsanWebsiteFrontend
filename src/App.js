import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Anasayfa/Components/Header";
import Footer from "./Pages/Anasayfa/Components/Footer";
import React from "react";
import Anasayfa from "Pages/Anasayfa/Anasayfa";
import AboutUs from "Pages/SirketProfili/AboutUs";
import NotFound from "Pages/NotFound/NotFound";
import Politics from "Pages/SirketProfili/Politics";
import Team from "Pages/SirketProfili/Team";
import Products from "Pages/SirketProfili/Products";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Anasayfa />} />
        <Route path="Anasayfa" element={<Anasayfa />} />
        <Route path="Hakkimizda" element={<AboutUs />} />
        <Route path="Politikalar" element={<Politics />} />
        <Route path="Ekip" element={<Team />} />
        <Route path="Urunler" element={<Products />} />
      </Routes>
      <Footer />

    </React.Fragment>
  );
}

export default App;
