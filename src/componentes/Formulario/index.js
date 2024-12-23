import { useState } from 'react';
import Cropper from 'react-easy-crop';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './Formulario.css';

//Constante que recebe o valor das variaveis
const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null);
    const [imagemRecortada, setImagemRecortada] = useState(null);
    const [time, setTime] = useState('');
    const [erroTime, setErroTime] = useState(false);
    const [cropData, setCropData] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropper, setShowCropper] = useState(false);

    const aoSalvar = (evento) => {
        evento.preventDefault();

        if (time === '') {
            setErroTime(true);
            return;
        }

        if (!imagemRecortada) {
            alert('Por favor, recorte a imagem antes de enviar.');
            return;
        }

        props.aoColaboradorCadastrado({
            nome,
            cargo,
            descricao, // Incluímos a descrição no objeto enviado
            imagem: imagemRecortada,
            time,
        });

        setNome('');
        setCargo('');
        setDescricao(''); // Limpa o campo de descrição
        setImagem(null);
        setImagemRecortada(null);
        setTime('');
        setErroTime(false);
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const getCroppedImage = () => {
        const canvas = document.createElement('canvas');
        const image = new Image();
        image.src = URL.createObjectURL(imagem);
        return new Promise((resolve, reject) => {
            image.onload = () => {
                const ctx = canvas.getContext('2d');
                const { width, height } = croppedAreaPixels;

                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(
                    image,
                    croppedAreaPixels.x,
                    croppedAreaPixels.y,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height,
                    0,
                    0,
                    width,
                    height
                );

                canvas.toBlob((blob) => {
                    if (blob) {
                        const croppedImageUrl = URL.createObjectURL(blob);
                        resolve(croppedImageUrl);
                    } else {
                        reject(new Error('Erro ao gerar a imagem recortada.'));
                    }
                }, 'image/png');
            };

            image.onerror = (error) => reject(error);
        });
    };

    const handleApplyCrop = async () => {
        try {
            const croppedImage = await getCroppedImage();
            setImagemRecortada(croppedImage);
            setShowCropper(false);
        } catch (error) {
            console.error('Erro ao aplicar recorte:', error);
        }
    };

    const handleCancelCrop = () => {
        setShowCropper(false);
        setImagem(null);
        setImagemRecortada(null);
    };

    const handleEditImage = () => {
        setShowCropper(true);
    };

    //Return do Formulário com os campos e suas configurações
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={(valor) => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={false}
                    label="Descrição"
                    placeholder="Digite uma breve descrição (máx. 2.000 caracteres)"
                    valor={descricao}
                    aoAlterado={(valor) => {
                        if (valor.length <= 2000) setDescricao(valor);
                    }}
                    tipo="textarea" // Permite que o campo seja um textarea
                />

                <div className="campo-texto">
                    <label>Imagem</label>
                    <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        onChange={(evento) => {
                            const file = evento.target.files[0];
                            if (file) {
                                setImagem(file);
                                setShowCropper(true);
                            }
                        }}
                    />
                </div>

                {imagem && !showCropper && imagemRecortada && (
                    <div className="preview-imagem">
                        <img src={imagemRecortada} alt="Imagem Selecionada" />
                        <button
                            type="button"
                            className="editar-foto"
                            onClick={handleEditImage}
                        >
                            Editar Foto
                        </button>
                    </div>
                )}

                {showCropper && (
                    <div className="cropper-modal">
                        <div className="cropper-container">
                            <Cropper
                                image={URL.createObjectURL(imagem)}
                                crop={cropData}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCropData}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                            />
                            <div className="cropper-controls">
                                <button
                                    className="cropper-button confirmar"
                                    type="button"
                                    onClick={handleApplyCrop}
                                >
                                    Confirmar
                                    
                                </button>
                                <button
                                    className="cropper-button cancelar"
                                    type="button"
                                    onClick={handleCancelCrop}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="campo-texto">
                    <label>Time</label>
                    <select
                        value={time}
                        onChange={(evento) => setTime(evento.target.value)}
                    >
                        <option value="">Selecione seu time</option>
                        {props.times.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {erroTime && (
                        <div className="erro-time">
                            Por favor, escolha um departamento válido.
                        </div>
                    )}
                </div>

                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
};

export default Formulario;
