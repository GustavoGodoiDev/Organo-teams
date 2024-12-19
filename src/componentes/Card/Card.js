import './Card.css';

function Card({ nome, imagem, cargo }) => {
    return (
        <div className='colaborador'>
            <img src={imagem} alt={nome || 'Imagem do colaborador'} />
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Card;