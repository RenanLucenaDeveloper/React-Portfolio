import setaPraCimaSVG from '../img/seta-para-cima.svg'

const Footer = () => {
  return (
    <footer>
      <p id="copyright">© Renan Lucena / Direitos reservados</p>
      <button id="voltar-ao-inicio">
          <a href="#header">
              Voltar ao início
          </a>
          <a href="#header"><img src={setaPraCimaSVG} alt="Voltar ao topo"/></a>
      </button>
    </footer>
  )
}

export default Footer