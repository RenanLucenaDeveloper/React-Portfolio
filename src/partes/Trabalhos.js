import React from 'react'
import bandeiraSVG from '../img/bandeira.svg'

const Trabalhos = () => {
  const trabalhosArray = [
    {
      data: 'Agosto - 2021',
      link: 'https://renanlucenadeveloper.github.io/TRY-HARD/',
      nome: 'Try-Hard',
      descricao: 'Modelo de site de uma joaleria fictícia. Demonstra habilidades Front End: Design Responsivo, Animações, dentre outras...',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'SASS', 'UI/UX Design'],
    },
    {
      data: 'Julho - 2021',
      link: 'https://renanlucenadeveloper.github.io/Barbery/',
      nome: 'Barbery',
      descricao: 'Modelo de site de uma joaleria fictícia. Demonstra habilidades Front End: Design Responsivo, Animações, dentre outras...',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'SASS', 'Web Design'],
    },
    {
      data: 'Junho - 2021',
      link: 'https://renanlucenadeveloper.github.io/File-Pages/',
      nome: 'File-Pages',
      descricao: 'Modelo de site de uma joaleria fictícia. Demonstra habilidades Front End: Design Responsivo, Animações, dentre outras...',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'SASS', 'Web Design'],
    },
  ]
  return (
    <section id="Trabalhos">
    <h1>Trabalhos</h1>

    <ul id="portfolio-container">
      {trabalhosArray.map(({ data, link, nome, descricao, tecnologias }) => {
        return (
          <a target='_blank' rel='noreferrer' href={link} key={nome}>
            <li>
                <div className="item-container">

                    <span>{data}</span>
                    <img src={bandeiraSVG} alt='bandeira'/>

                    <div className="item">
                        <div>
                            <h2 className="subtitulo">
                                {nome}
                            </h2>
                            <p>
                                {descricao}
                            </p>
                        </div>
                        <div>
                            <h2 className="subtitulo">
                                Tecnologias
                            </h2>
                            <div className="tecnologias">
                              {tecnologias.map((item) => <button key={item}>{item}</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </a>
        )
      })}
    </ul>
    </section>
  )
}

export default Trabalhos