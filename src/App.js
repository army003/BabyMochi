import Hero from "./components/hero.jsx";
import Info from "./components/Info.jsx";
import MoreInfo from "./components/moreInfo.jsx";
import Navbar from "./components/navbar.jsx";
import Section from "./components/section.jsx";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <Section />
      <MoreInfo />
    </div>
  );
}

export default App;
