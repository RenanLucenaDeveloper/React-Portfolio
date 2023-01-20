import React from 'react'
import TypeWriter from './TypeWriter'
import MobileContext from "./MobileContext"

const Intro = () => {
  const userMobile = React.useContext(MobileContext);
  return (
    <section id="Intro">
      <TypeWriter text={'Renan Lucena é um Desenvolvedor Front End & UI/UX Designer'} mobile={userMobile.isMobile}/>

      <div>
          <a href="#Contato" id="botao-contato">Contato</a>
          <a href="#Trabalhos" id="botao-experiencia">Experiência</a>
      </div>
    </section>
  )
}

export default Intro