import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer/footer';  
import Header from './componentes/Header/header';

//Definição dos times
function App() {
    const times = [
        {
            nome: 'Diretoria',
            corPrimaria: 'rgba(26, 188, 156, 0.7)', // Adicionado alfa para transparência
            corSecundaria: 'rgba(212, 244, 241, 0.5)'
        },
        {
            nome: 'Recursos Humanos',
            corPrimaria: 'rgba(130, 207, 250, 0.7)',
            corSecundaria: 'rgba(232, 248, 255, 0.5)'
        },
        {
            nome: 'Financeiro',
            corPrimaria: 'rgba(39, 174, 96, 0.7)',
            corSecundaria: 'rgba(213, 245, 227, 0.5)'
        },
        {
            nome: 'Contábil',
            corPrimaria: 'rgba(224, 107, 105, 0.7)',
            corSecundaria: 'rgba(253, 231, 232, 0.5)'
        },
        {
            nome: 'Tecnologia da Informação',
            corPrimaria: 'rgba(30, 144, 255, 0.7)',
            corSecundaria: 'rgba(214, 234, 248, 0.5)'
        },
        {
            nome: 'Supply Chain',
            corPrimaria: 'rgba(142, 68, 173, 0.7)',
            corSecundaria: 'rgba(245, 238, 248, 0.5)'
        },
        {
            nome: 'Logística',
            corPrimaria: 'rgba(255, 186, 5, 0.7)',
            corSecundaria: 'rgba(255, 245, 217, 0.5)'
        },
        {
            nome: 'Engenharia',
            corPrimaria: 'rgba(125, 60, 152, 0.7)',
            corSecundaria: 'rgba(235, 222, 240, 0.5)'
        },
        {
            nome: 'Projetos',
            corPrimaria: 'rgba(41, 128, 185, 0.7)',
            corSecundaria: 'rgba(214, 234, 248, 0.5)'
        },
        {
            nome: 'Facilities',
            corPrimaria: 'rgba(22, 160, 133, 0.7)',
            corSecundaria: 'rgba(209, 242, 235, 0.5)'
        },
        {
            nome: 'Produção',
            corPrimaria: 'rgba(192, 57, 43, 0.7)',
            corSecundaria: 'rgba(249, 235, 234, 0.5)'
        },
        {
            nome: 'Vendas',
            corPrimaria: 'rgba(230, 126, 34, 0.7)',
            corSecundaria: 'rgba(253, 227, 167, 0.5)'
        },
        {
            nome: 'Time de Campo',
            corPrimaria: 'rgba(231, 76, 60, 0.7)',
            corSecundaria: 'rgba(250, 219, 216, 0.5)'
        }
    ];
    

    // Estado para armazenar colaboradores organizados por time
    const [colaboradores, setColaboradores] = useState(() => {
        const initialColaboradores = {};
        times.forEach(time => {
            initialColaboradores[time.nome] = [];
        });
        return initialColaboradores;
    });

    //Adicionar o colaborador ao time especifico
    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores(prevColaboradores => ({
            ...prevColaboradores,
            [colaborador.time]: [...prevColaboradores[colaborador.time], colaborador],
        }));
    };

    //Retorno da função App
    return (
        <div className="App">

            <Header/>
            
            <Banner />
            <Formulario
                times={times.map((time) => time.nome)}
                aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
            />

            {times.map((time) => (
                <Time
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSecundaria={time.corSecundaria}
                    colaboradores={colaboradores[time.nome]} // Passa os colaboradores por time
                />

            ))}

            <Footer/>
        </div>
    );
}

export default App;
