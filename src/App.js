import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


//Definição dos times
function App() {
    const times = [
        {
            nome: 'Diretoria',
            corPrimaria: '#1ABC9C',
            corSecundaria: '#D4F4F1'
        },
        {
            nome: 'Recursos humanos',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Financeiro',
            corPrimaria: '#27AE60',
            corSecundaria: '#D5F5E3'
        },
        {
            nome: 'Contábil',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'Tecnologia da informação',
            corPrimaria: '#1E90FF',
            corSecundaria: '#D6EAF8'
        },
        {
            nome: 'Supply Chain',
            corPrimaria: '#8E44AD',
            corSecundaria: '#F5EEF8'
        },
        {
            nome: 'Logística',
            corPrimaria: '#FFBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Engenharia',
            corPrimaria: '#7D3C98',
            corSecundaria: '#EBDEF0'
        },
        {
            nome: 'Projetos',
            corPrimaria: '#2980B9',
            corSecundaria: '#D6EAF8'
        },
        {
            nome: 'Facilities',
            corPrimaria: '#16A085',
            corSecundaria: '#D1F2EB'
        },
        {
            nome: 'Produção',
            corPrimaria: '#C0392B',
            corSecundaria: '#F9EBEA'
        },
        {
            nome: 'Vendas',
            corPrimaria: '#E67E22',
            corSecundaria: '#FDE3A7'
        },
        {
            nome: 'Time de campo',
            corPrimaria: '#E74C3C',
            corSecundaria: '#FADBD8'
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
        </div>
    );
}

export default App;
