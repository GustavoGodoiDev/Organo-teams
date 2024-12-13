import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Forms from './componentes/Forms/Forms.js';
import Team from './componentes/Team/Team';

function App() {
  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'UX UI',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms  teams = {teams.map(team => team.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />

      {teams.map(team => <Team 
        key = {team.nome} 
        nome={team.nome} 
        corPrimaria={team.corPrimaria}
        corSecundaria={team.corSecundaria}
        colaboradores={colaboradores}
        />)}

    </div>
  );
}

export default App;
