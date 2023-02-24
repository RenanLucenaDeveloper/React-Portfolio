import React from 'react'
import copyTextSVG from '../img/copy-text-icon.svg'
import telegramSVG from '../img/telegram.svg'
import whatsappSVG from '../img/whatsapp.svg'
import instagramSVG from '../img/instagram.svg'
import githubSVG from '../img/github.svg'
import Detalhes from './Detalhes'
import MobileContext from "./MobileContext";

const Contato = () => {
  const dados = {
    email: 'ReenanDeveloper@hotmail.com',
    numero: '(11) 96568-3640',
  }

  const [detalhesEnabled, setDetalhesEnabled] = React.useState(false);
  const [target, setTarget] = React.useState({} as EventTarget | null);
  const [notificacao, setNotificacao] = React.useState('' as string | null);
  const timeoutRef = React.useRef({} as NodeJS.Timeout);
  const userMobile = React.useContext(MobileContext);

  function copiarParaClipboard(text : string, type : string) {
    console.log(text)
    setNotificacao(`${type} copiado`);
    navigator.clipboard.writeText(text);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1400);
  }

  return (
    <section id="Contato">
    <h1>
        Contato
    </h1>
    <div className="item">
        <h2 className="subtitulo">
            Email
        </h2>
        <p>{dados.email}<img src={copyTextSVG} alt="Copiar Email" className="copiar" id={dados.email} onClick={() => copiarParaClipboard(dados.email, 'Email')} onMouseEnter={({ target }) => { setTarget(target); setDetalhesEnabled(true)}} onMouseLeave={() =>{ setTarget(null); setDetalhesEnabled(false)}}/></p>

        <h2>
            Whatsapp / Telegram
        </h2>
        <p>{dados.numero}<img src={copyTextSVG} alt="Copiar Número" className="copiar" id={dados.numero} onClick={() => copiarParaClipboard(dados.numero, 'Número')} onMouseEnter={({ target }) => { setTarget(target); setDetalhesEnabled(true)}} onMouseLeave={() =>{ setTarget(null); setDetalhesEnabled(false)}}/></p>
    </div>

    <div>
        <p id="aviso">
            Localizado em <span>SP</span> / disposto a <span>trabalho
                remoto 🛰️</span>
        </p>

        <div id="redes-bg">
            <h2 className="subtitulo redes-titulo">
                Redes Sociais
            </h2>
            <ul className="redes">
                <li><a href="https://t.me/reenanluceena" target="_blank" rel='noreferrer'><img src={telegramSVG} alt="telegram"/></a></li>
                <li><a href="https://wa.me/5511965683640" target="_blank" rel='noreferrer'><img src={whatsappSVG} alt="whatsapp"/></a></li>
                <li><a href="https://www.instagram.com/renanlucenadev/" target="_blank" rel='noreferrer'><img
                            src={instagramSVG} alt="instagram"/></a></li>
                <li><a href="https://github.com/RenanLucenaDeveloper" target="_blank" rel='noreferrer'><img src={githubSVG}
                            alt="github"/></a>
                </li>
            </ul>
        </div>
    </div>

    {/* Mostrar os detalhes (descrição) */} 
    {!userMobile.isMobile && detalhesEnabled && target instanceof HTMLImageElement && <Detalhes alt={target.alt} offsetTop={target.offsetTop} offsetLeft={target.offsetLeft}/>}

    {/* Mostrar a notificação */}
    {notificacao && <div className={`notificacao`}>{notificacao}</div>}

</section>

  )
}

export default Contato;
