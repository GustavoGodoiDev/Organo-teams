import React from 'react';
import '../TextInput/TextInput.css';

const TextInput = (props) => {
  const aoDigitado = (evento) => {
    if (props.aoAlterado) {
      props.aoAlterado(evento.target.value); // Chama a função passada como prop ao alterar o valor
    }
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor} // Controlado externamente via prop
        onChange={aoDigitado} // Dispara o evento de alteração
        required={props.obrigatorio} // Define se o campo é obrigatório
        placeholder={props.placeholder} // Define o texto placeholder
      />
    </div>
  );
};

export default TextInput;
