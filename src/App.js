import "./App.css";
import Header from "./Pages/Anasayfa/Components/Header";
import Slider from "./Pages/Anasayfa/Components/Slider";
import Company from "./Pages/Anasayfa/Components/Company";
import Counter from "./Pages/Anasayfa/Components/Counter";
import Clients from "./Pages/Anasayfa/Components/Clients";
import Footer from "./Pages/Anasayfa/Components/Footer";
import Vision from "./Pages/Anasayfa/Components/Vision";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Clients />
      <Company />
      <Vision/>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
