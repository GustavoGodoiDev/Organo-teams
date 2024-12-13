import './OptionList.css';

const OptionList = (props) => {
    // Verificação de que props.itens é um array
    if (!Array.isArray(props.itens)) {
        console.error("Erro: props.itens não é um array");
        return null; // Retorna null ou algum fallback caso o valor não seja um array
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio} 
                value={props.valor}
            >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
};

export default OptionList;
