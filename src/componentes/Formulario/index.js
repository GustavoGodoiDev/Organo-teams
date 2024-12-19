import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState(null);
    const [time, setTime] = useState(''); // Inicialmente vazio
    const [erroTime, setErroTime] = useState(false); // Estado para erro no time

    const aoSalvar = (evento) => {
        evento.preventDefault();

        // Verifica se "Selecione seu time" está selecionado
        if (time === '') {
            setErroTime(true); // Mostra erro se "Selecione seu time" for a opção selecionada
            return;
        }

        // Lê o arquivo de imagem como URL usando FileReader
        if (imagem) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Criação do colaborador com as informações do estado, incluindo a URL da imagem
                props.aoColaboradorCadastrado({
                    nome,
                    cargo,
                    imagem: reader.result,
                    time
                });

                // Limpa os campos após salvar
                setNome('');
                setCargo('');
                setImagem(null);
                setTime(''); // Reseta o valor de time
                setErroTime(false); // Reseta o erro de time
            };

            reader.readAsDataURL(imagem); // Lê a imagem como uma URL
        } else {

            // Caso não tenha imagem, só envia os outros dados
            props.aoColaboradorCadastrado({
                nome,
                cargo,
                imagem: null,
                time
            });

            // Limpa os campos após salvar
            setNome('');
            setCargo('');
            setImagem(null);
            setTime('');
            setErroTime(false);
        }
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                {/* Campo de Upload de Arquivo */}
                <div className="campo-texto">
                    <label>Imagem</label>
                    <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        onChange={evento => setImagem(evento.target.files[0])}
                    />
                </div>

                {/* Lista Suspensa com a primeira opção sendo "Selecione seu time" */}
                <div className="campo-texto">
                    <label>Time</label>
                    <select
                        value={time}
                        onChange={evento => setTime(evento.target.value)}
                    >
                        <option value="">Selecione seu time</option>
                        {props.times.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                    {erroTime && (
                        <div className="erro-time">Por favor, escolha um departamento válido.</div>
                    )}
                </div>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
