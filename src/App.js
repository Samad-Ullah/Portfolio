import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/menu"
import Work from "./components/works/works"

function App() {
  const [menu, setmenu] = useState(false)
  return (
    <div className="app">
      <Topbar menu={menu} setmenu={setmenu}></Topbar>
      <Menu menu={menu} setmenu={setmenu}></Menu>
      <div className="section">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Work></Work>
        <Contact></Contact>
      </div>


    </div>
  );
}

export default App;
