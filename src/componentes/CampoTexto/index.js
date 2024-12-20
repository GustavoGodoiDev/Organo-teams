import { useState, useEffect, useRef } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {
    const { obrigatorio, label, placeholder, valor, aoAlterado, tipo, ...outros } = props;
    const textareaRef = useRef(null);

    // Função para ajustar a altura do textarea automaticamente
    const ajustarAlturaTextarea = () => {
        if (textareaRef.current) {
            
            // Resetando a altura para ajustar corretamente a expansão
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    // Usamos useEffect para ajustar a altura ao inicializar ou quando o valor mudar
    useEffect(() => {
        ajustarAlturaTextarea();
    }, [valor]);

    return (
        <div className="campo-texto">
            <label>{label}</label>
            {tipo === "textarea" ? (
                <textarea
                    ref={textareaRef}
                    value={valor}
                    onChange={(e) => {
                        aoAlterado(e.target.value); // Atualiza o valor no estado
                        ajustarAlturaTextarea(); // Ajusta a altura conforme o conteúdo
                    }}
                    placeholder={placeholder}
                    required={obrigatorio}
                    {...outros}
                    style={{
                        resize: "none", 
                        overflow: "hidden", 
                        minHeight: "60px", 
                        width: "100%", 
                        fontSize: "16px", 
                        padding: "10px", 
                        borderRadius: "15px", 
                        border: "1px solid #ccc", 
                        boxSizing: "border-box",
                    }}
                />
            ) : (
                <input
                    type="text"
                    value={valor}
                    onChange={(e) => aoAlterado(e.target.value)}
                    placeholder={placeholder}
                    required={obrigatorio}
                    {...outros}
                />
            )}
        </div>
    );
};

export default CampoTexto;
