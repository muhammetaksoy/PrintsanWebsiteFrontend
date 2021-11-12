import "./App.css";
import Header from "./Pages/Anasayfa/Components/Header";
import Slider from "./Pages/Anasayfa/Components/Slider";
import Company from "./Pages/Anasayfa/Components/Company";
import Counter from "./Pages/Anasayfa/Components/Counter";
import Clients from "./Pages/Anasayfa/Components/Clients";
import Footer from "./Pages/Anasayfa/Components/Footer";
import Vision from "./Pages/Anasayfa/Components/Vision";
import React from "react";
import Video from "Pages/Anasayfa/Components/Video";
import PopulerProducts from "Pages/Anasayfa/Components/PopulerProducts";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Clients />
      <Company />
      <Vision />
      <PopulerProducts />
      <Counter />
      <Video />
      <Footer />

    </div>
  );
}

export default App;
