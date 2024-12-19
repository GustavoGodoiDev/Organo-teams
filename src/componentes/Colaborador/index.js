import './Colaborador.css';

const Colaborador = ({ nome, imagem, cargo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                {imagem ? (
                    <img src={imagem} alt={`Foto de ${nome}`} />
                ) : (
                    <div className="placeholder-imagem">Sem imagem</div>
                )}
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
