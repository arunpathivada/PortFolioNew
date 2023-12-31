import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testmonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./app.scss";
import Menu from "./components/Menu/Menu.jsx";
import { useState } from "react";
function App() {
  const [menuOpen,setMenuOpen]= useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testmonials/>
      <Contact/>
    </div>

    </div>
  );
}

export default App;
