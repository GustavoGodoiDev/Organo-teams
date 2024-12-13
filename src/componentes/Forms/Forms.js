import React, { useState } from 'react';
import OptionList from '../OptionList/OptionList';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import './Forms.css';

const Forms = (props) => {

    // Estados para os inputs
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [timeSelecionado, setTimeSelecionado] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            timeSelecionado
        });
    };

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card do Colaborador</h2>

                <TextInput
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />

                <TextInput
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={(valor) => setCargo(valor)}
                />

                <TextInput
                    obrigatorio={false}
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />

                <OptionList 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.teams} 
                    valor={timeSelecionado} 
                    aoAlterado={(valor) => setTimeSelecionado(valor)}
                />

                <Button texto="Criar Card" />
            </form>
        </section>
    );
};

export default Forms;
