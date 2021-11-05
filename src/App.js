import "./App.css";
import Header from "./Pages/Anasayfa/Components/Header";
import Slider from "./Pages/Anasayfa/Components/Slider";
import Company from "./Pages/Anasayfa/Components/Company";
import Counter from "./Pages/Anasayfa/Components/Counter";
import Clients from "./Pages/Anasayfa/Components/Clients";

function App() {
  return (
    <div>
      <Header/>
      <Slider />
      <Company/>
      <Counter/>
      <Clients/>
    </div>
  );
}

export default App;
