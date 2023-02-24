import React from "react";
import './css/reset.css'
import './css/style.css'
import MobileContext from "./partes/MobileContext";
import Header from './partes/Header';
import Intro from './partes/Intro';
import Trabalhos from './partes/Trabalhos';
import Formacao from './partes/Formacao';
import Contato from './partes/Contato';
import Footer from './partes/Footer';

function App() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    if(window.innerWidth < 701) {
      setMobile(true)
    }
    else {
      setMobile(false);
    }
  }, [isMobile])

  return (
    <>
      <Header/>
      <MobileContext.Provider value={{isMobile}}>
        <Intro/>
      </MobileContext.Provider>
      <Trabalhos/>
      <Formacao/>
      <MobileContext.Provider value={{isMobile}}>
        <Contato/>
      </MobileContext.Provider>
      <Footer/>
    </>
  )
}

export default App;
