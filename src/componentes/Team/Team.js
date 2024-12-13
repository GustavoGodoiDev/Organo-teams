import Card from '../Card/Card';
import './Team.css';

const Team = (props) => {
    const estilos = {
        backgroundColor: props.corSecundaria,
        borderColor: props.corPrimaria,
    };

    return (
        <section className='team' style={estilos}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    );
};

export default Team;
