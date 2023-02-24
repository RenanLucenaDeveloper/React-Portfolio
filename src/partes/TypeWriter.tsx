import React from 'react'

const TypeWriter = ({ text, mobile } : { text : string, mobile : boolean }) => {
  const index = React.useRef(0);
  const [currentText, setCurrentText] = React.useState('');

  React.useEffect(() => {
    setTimeout(()=> {
      if (index.current < text.length) {
        index.current += 1;
        setCurrentText((value) => value + text.charAt(index.current));
      }
    }, 60);
  }, [currentText, text]);

  if (mobile) return (
    <h1 data-titulo>{text.charAt(0)}{currentText}</h1>
  )
  return <h1 data-titulo>{text}</h1>
}

export default TypeWriter;