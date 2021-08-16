import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import  Works from "./components/works/Works";
import "../src/app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="App">
      <Topbar  menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
