# Create Doc Numbers

Create Doc Numbers é uma extensão para geração de números fictícios de CPF e CNPJ. A extensão foi desenvolvida utilizando React e diversas ferramentas para facilitar o desenvolvimento e garantir um código limpo e bem estruturado.

## Funcionalidades

- Geração de números de CPF e CNPJ fictícios
- Validação de CPF e CNPJ utilizando a biblioteca `cpf-cnpj-validator`
- Interface interativa e fácil de usar

## Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS
- ESLint

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/create-doc-numbers.git
```

2. Navegue até o diretório do projeto:

```bash
cd create-doc-numbers
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá quaisquer erros de lint no console.

### `npm run build`

Compila a aplicação para produção na pasta `dist`.\
Ele corretamente agrupa o React no modo de produção e otimiza a construção para o melhor desempenho.

### `npm run preview`

Visualiza a compilação de produção localmente.

### `npm run lint`

Executa o ESLint para encontrar e corrigir problemas no código.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
- `public/`: Contém os arquivos estáticos.
- `dist/`: Pasta gerada após a construção para produção.
- `package.json`: Arquivo de configuração do npm contendo scripts e dependências do projeto.
- `vite.config.js`: Configurações do Vite para o projeto.
- `tailwind.config.js`: Configurações do Tailwind CSS.

## Dependências

- `cpf-cnpj-validator`: Biblioteca para validação de CPF e CNPJ.
- `react`: Biblioteca para construção da interface do usuário.
- `react-dom`: Biblioteca para manipulação da árvore de elementos do React.

## DevDependencies

- `@types/react`: Tipos do TypeScript para React.
- `@types/react-dom`: Tipos do TypeScript para React DOM.
- `@vitejs/plugin-react`: Plugin Vite para suporte ao React.
- `autoprefixer`: Plugin para PostCSS para adicionar prefixos do fornecedor CSS.
- `eslint`: Ferramenta para identificar e reportar padrões encontrados no código ECMAScript/JavaScript.
- `eslint-plugin-react`: Plugin ESLint com regras específicas para React.
- `eslint-plugin-react-hooks`: Plugin ESLint para verificar regras dos Hooks do React.
- `eslint-plugin-react-refresh`: Plugin ESLint para suporte ao React Refresh.
- `postcss`: Ferramenta para transformar CSS com plugins.
- `tailwindcss`: Framework CSS utilitário para estilização.
- `vite`: Ferramenta de construção de frontend.

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar algum problema, por favor, abra uma issue ou envie um pull request.
