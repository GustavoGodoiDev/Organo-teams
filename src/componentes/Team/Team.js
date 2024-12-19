import './Team.css';
import Card from '../Card/Card';


const Team = (props) => {
    const estilos = {
        backgroundColor: props.corSecundaria,
        borderColor: props.corPrimaria,
    };

    return (
        <section className='team' style={estilos}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            
            <div className='Colaboradores'>
                {props.colaboradores.map( Colaborador => 
                <Card nome={Colaborador.nome} 
                cargo={Colaborador.cargo} 
                imagem ={Colaborador.imagem}/>)}
            </div>

        </section>
    );
};

export default Team;
