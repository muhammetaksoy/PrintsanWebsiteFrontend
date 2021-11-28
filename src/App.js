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
import Process from "Pages/Process/Process";
import Contact from "Pages/Contact/Contact";
import MachineParkour from "Pages/MakinaParkuru/MachineParkour";
import Media from "Pages/Medya/Media";
import Products from "Pages/Urunler/Products";


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
        <Route path="Uretim" element={<Process />} />
        <Route path="MakinaParkuru" element={<MachineParkour />} />
        <Route path="Medya" element={<Media />} />
        <Route path="Iletisim" element={<Contact />} />
      </Routes>
      <Footer />

    </React.Fragment>
  );
}

export default App;
