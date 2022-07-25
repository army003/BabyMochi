import Bigraphy from "./components/bigraphy.jsx";
import Dance from "./components/dance.jsx";
import Dance2 from "./components/dance2.jsx";
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
      <Dance />
      <Bigraphy />
      <Dance2 />
    </div>
  );
}

export default App;
