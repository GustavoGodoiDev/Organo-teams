Organo - Ferramenta de Organização de Times por Setores
Organo é uma ferramenta desenvolvida em React para ajudar empresas a gerenciar e organizar seus times de forma eficiente por departamentos. O projeto permite adicionar colaboradores a times específicos, criar cards personalizados para cada colaborador e visualizar todos os times organizados por cores e setores.

Este repositório contém a aplicação web para gerenciar os times e departamentos de uma organização de forma simples e eficiente.

Funcionalidades
Cadastro de Colaboradores: Permite adicionar colaboradores a diferentes times/departamentos.
Visualização por Setor: Cada departamento é visualizado separadamente, com informações dos colaboradores alocados a ele.
Upload de Imagens: Permite que o usuário faça upload de imagens para associar a cada colaborador.
Validação de Campos: Certifica-se de que os dados inseridos sejam válidos antes de permitir o envio do formulário.
Interface Responsiva: A aplicação é responsiva e pode ser acessada em dispositivos móveis e desktops.
Tecnologias Utilizadas
React: Framework JavaScript para construir a interface do usuário.
CSS: Estilização da aplicação com foco em um design moderno e intuitivo.
Hooks do React: Utilização de hooks como useState e useEffect para gerenciar o estado e o ciclo de vida dos componentes.
Como Rodar o Projeto Localmente
Siga os passos abaixo para rodar este projeto localmente em sua máquina.

1. Clonando o Repositório
Abra o terminal e clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/organo.git
2. Instalando as Dependências
Navegue até o diretório do projeto e instale as dependências:

bash
Copiar código
cd organo
npm install
3. Rodando o Projeto
Depois de instalar as dependências, inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
Isso irá abrir a aplicação no seu navegador padrão, geralmente acessível em http://localhost:3000.

4. Construindo o Projeto para Produção
Para criar uma versão otimizada do seu projeto para produção, use o comando:

bash
Copiar código
npm run build
Isso criará uma pasta build/ com os arquivos otimizados para produção.

Estrutura do Projeto
A estrutura do projeto é a seguinte:

css
Copiar código
organo/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── componentes/
│   │   ├── Banner/
│   │   ├── Botao/
│   │   ├── CampoTexto/
│   │   ├── Formulario/
│   │   └── Time/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
├── .gitignore
└── README.md
src/componentes/: Contém os componentes principais da aplicação, como o formulário de cadastro de colaboradores, botões, e a visualização dos times.
src/App.js: O componente principal que gerencia os estados e renderiza os outros componentes.
public/: Contém o arquivo index.html e outros arquivos públicos.