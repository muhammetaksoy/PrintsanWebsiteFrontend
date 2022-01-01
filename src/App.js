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
import OpenPositions from "Pages/Career/OpenPositions";
import MediaDetail from "Pages/Medya/MedyaDetay/MediaDetail";
import OpenPositionForm from "Pages/Career/OpenPositionForm";
import JobAplly from "Pages/Career/JobApply";
import Admin from "Pages/Admin/Admin";
import Login from "Pages/Login/Login";
import CreatePosition from "Pages/Admin/CreatePosition";
import ShowApplicants from "Pages/Admin/ShowApplicants";
import ShowContact from "Pages/Admin/ShowContact";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();
  return (
    <React.Fragment>
      {!window.location.href.includes("Admin") && !window.location.href.includes("Login") && !window.location.href.includes("BasvuruOlustur") && !window.location.href.includes("Basvurular") && !window.location.href.includes("Mesajlar") && 
      <>
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
        <Route path="/MedyaDetay/:id" element={<MediaDetail />} />
        <Route path="Iletisim" element={<Contact />} />
        <Route path="AcikPozisyonlar" element={<OpenPositions />} />
        <Route path="/AcikPozisyonlarForm/:id" element={<OpenPositionForm />} />
        <Route path="Basvuru" element={<JobAplly />} />
      </Routes>
      <Footer />
      </>
      }
      
      <Routes>
        <Route path="Admin"  element={<Admin />}/>   
      </Routes>

      <Routes>
      <Route path="Login"  element={<Login setToken={setToken} />}/>
      </Routes>

      <Routes>
        <Route path="BasvuruOlustur"  element={<CreatePosition />}/>   
      </Routes>

      <Routes>
        <Route path="Basvurular"  element={<ShowApplicants />}/>   
      </Routes>
      <Routes>
        <Route path="Mesajlar"  element={<ShowContact />}/>   
      </Routes>

    </React.Fragment>
  );
}



export default App;
