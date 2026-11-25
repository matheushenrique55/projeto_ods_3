# 💙 VidaSaudável - Promoção da Saúde e Bem-Estar Local

## 📌 Descrição do Projeto
O **VidaSaudável** é uma aplicação web desenvolvida para a disciplina de **Programação Web Front-End (2026_02)** da UTFPR.

O projeto foi elaborado para atender ao **Objetivo de Desenvolvimento Sustentável 3 (ODS 3 - Saúde e Bem-Estar)** da ONU, incentivando a prevenção de doenças, cuidados com a saúde mental, prática de atividades físicas e atualização da vacinação na comunidade local.

## 👥 Integrantes da Equipe
- Matheus Henrique Furtado (RA: 2649420)

Professora: Rosangela Marquesone

## 🛠️ Tecnologias Utilizadas
- **HTML5** (Tags semânticas)
- **CSS3** (Estilização pura com Flexbox e CSS Grid)
- **Google Fonts** (Fonte externa `Roboto`)

## ✨ Funcionalidades da Página de Administração (`adm.html`)
- **Cadastro de Usuários:** Inclusão de nome e e-mail com registro automático da data e hora de envio em uma lista não ordenada (`<ul>`) e armazenamento em chave única JSON no `localStorage`.
- **Validação de Duplicidade:** Impede o cadastro de usuários com nome ou e-mail já existentes.
- **Limpar Campos:** Botão dedicado para limpar rapidamente os campos do formulário.
- **Pesquisa Dinâmica:** Filtro em tempo real na lista por nome ou e-mail do usuário.
- **Exclusão Individual e Total:** Opções para remover um item específico ou limpar toda a lista e o `localStorage`, ambas com caixa de confirmação.

## 📁 Estrutura de Arquivos
- `index.html`: Página principal focada na ODS 3, imagens informativas, link para currículo e acesso à área administrativa (`Adm`).
- `login.html`: Página contendo formulário de cadastro (6 campos) e formulário de login (redireciona para a home).
- `adm.html`: Página de administração de usuários com formulário, pesquisa e listagem dinâmica.
- `css/style.css`: Estilização da página principal e layout base (cabeçalho e rodapé).
- `css/login.css`: Estilização da página de autenticação.
- `css/adm.css`: Estilização da página de administração.
- `js/adm.js`: Lógica em JavaScript para manipulação do DOM, filtros, validações e persistência no `localStorage`.
- `img/`: Diretório com as imagens informativas de saúde.
