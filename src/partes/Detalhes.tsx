import React from "react";

const Detalhes = ({ alt, offsetTop, offsetLeft} : { alt : string , offsetLeft : number, offsetTop : number}) => {
  const detalhes = alt;
  const detalhesPosition = {
    offsetLeft : offsetLeft + 25,
    offsetDown : offsetTop + 35,
  };

  if (alt === null) return null;
  return <div className='detalhes' style={{top:`${detalhesPosition.offsetDown}px`, left:`${detalhesPosition.offsetLeft}px`}}>{detalhes}</div>;
}

export default Detalhes;
