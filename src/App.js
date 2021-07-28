import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/menu"
import Work from "./components/works/works"
import Footer from "./components/footer/footer"
import About from "./components/About/About"

function App() {
  const [menu, setmenu] = useState(false)
  return (
    <div className="app">
      <Topbar menu={menu} setmenu={setmenu}></Topbar>
      <Menu menu={menu} setmenu={setmenu}></Menu>
      <div className="section">
        <Intro></Intro>
        {/* <Work></Work> */}
        <About></About>
        <Portfolio></Portfolio>
        
        <Contact></Contact>
        <Footer></Footer>
      </div>


    </div>
  );
}

export default App;
