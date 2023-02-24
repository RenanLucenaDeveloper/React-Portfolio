import React from 'react'
import designSVG from '../img/design-icon.svg'
import codigoSVG from '../img/code-icon.svg'
import tresPontosSVG from '../img/tres-pontos.svg'
import setaMostrarMaisSVG from '../img/seta.svg'
import html5SVG from '../img/html5.svg'
import cssSVG from '../img/css3.svg'
import javaScriptSVG from '../img/js.svg'
import sassSVG from '../img/sass.svg'
import reactSVG from '../img/react.svg'
import vuejsSVG from '../img/vuejs.svg'
import Detalhes from './Detalhes'

const Formacao = () => {
	interface LinguagensObject {
		alt: string;
		img: string;
	}

	type LinguagensArray = Array<LinguagensObject>;

  const linguagens : LinguagensArray = [
    {
      alt: 'HTML5',
      img: html5SVG,
    },
    {
      alt: 'CSS3',
      img: cssSVG,
    },
    {
      alt: 'JavaScript',
      img: javaScriptSVG,
    },
    {
      alt: 'SASS',
      img: sassSVG,
    },
    {
      alt: 'React JS',
      img: reactSVG,
    },
    {
      alt: 'Vue JS',
      img: vuejsSVG,
    },
  ];
  const [detalhesEnabled, setDetalhesEnabled] = React.useState(false);
  const [target, setTarget] = React.useState({} as EventTarget | null);

  return (
    <section id="Formacao">
        <div>
            <h1>
                Formação
            </h1>
        </div>

        <div>
            <ul id="graduacao-container">
                <li className="item">
                    <h2 className="subtitulo">
                        UI Design Avançado
                    </h2>
                    <p>
                        Origamid
                    </p>
                    <div>
                        <img src={designSVG} alt="Design"/>
                    </div>
                </li>
                <li className="item">
                    <h2 className="subtitulo">
                        Web Design Completo
                    </h2>
                    <p>
                        Origamid
                    </p>
                    <div>
                        <img src={designSVG} alt="Design"/>
                    </div>
                </li>
                <li className="item">
                    <h2 className="subtitulo">
                        Typescript
                    </h2>
                    <p>
                        Origamid
                    </p>
                    <div className="icons-graduacao">
                        <img className="codigo" src={codigoSVG} alt="Código"/>
                    </div>
                </li>
                <li className="item">
                    <h2 className="subtitulo">
                        ReactJS Completo
                    </h2>
                    <p>
                        Origamid
                    </p>
                    <div className="icons-graduacao">
                        <img className="codigo" src={codigoSVG} alt="Código"/>
                    </div>
                </li>
                <li className="item">
                    <h2 className="subtitulo">
                        CSS Com SASS
                    </h2>
                    <p>
                        Origamid
                    </p>
                    <div className="icons-graduacao">
                        <img className="codigo" src={codigoSVG} alt="Código"/>
                    </div>
                </li>
                <li className="item">
                    <h2 className="subtitulo">
                        JavaScript ES6
                    </h2>
                    <p>
                        Origamid
                    </p>
                    <div className="icons-graduacao">
                        <img className="codigo" src={codigoSVG} alt="Código"/>
                    </div>
                </li>
            </ul>

            <button><img src={tresPontosSVG} alt='tres pontos'/><img src={setaMostrarMaisSVG} alt="Seta-Mostrar-Mais"/></button>

            <div id="habilidades-container">
                <div id="tecnologias-container">
                    <h3>
                        Tecnologias
                    </h3>
                    
                    <ul>
                      {linguagens.map(({ alt, img }) => {
                        return <li key={alt} onMouseEnter={({ target }) => { setTarget(target); setDetalhesEnabled(true)}} onMouseLeave={() =>{ setTarget(null); setDetalhesEnabled(false)}}><img src={img} alt={alt}/></li>
                      })}
                    </ul>
                </div>

                <div id="idiomas-container">
                    <h3>
                        Idiomas
                    </h3>
                    <p id="idiomas">
                        Inglês <span>/ Intermediario - Avançado</span>
                    </p>
                </div>
            </div>
        </div>

        {detalhesEnabled && target instanceof HTMLImageElement && <Detalhes alt={target.alt} offsetTop={target.offsetTop} offsetLeft={target.offsetLeft}/>}
        
    </section>
  )
}

export default Formacao