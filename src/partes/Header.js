import React from 'react'

const Header = () => {
  return (
    <header id="header">
        <a href="./index.html" id="logo">👋</a>
        <nav>
            <ul className='ul'>
                <li><a href="#Formacao">Experiência</a></li>
                <li><a href="#Trabalhos">Trabalhos</a></li>
                <li><a href="#Formacao">Formação</a></li>
                <li><a href="#Contato">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header