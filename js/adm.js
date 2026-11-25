const CHAVE_STORAGE = 'usuariosVidaSaudavel';

const formCadastro = document.getElementById('form-cadastro-adm');
const inputNome = document.getElementById('nome-usuario');
const inputEmail = document.getElementById('email-usuario');
const botaoLimpar = document.getElementById('botao-limpar');
const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoExcluirTodos = document.getElementById('botao-excluir-todos');
const listaUsuarios = document.getElementById('lista-usuarios');

function obterUsuarios(){
  const dados = localStorage.getItem(CHAVE_STORAGE);
  if(dados){
    return JSON.parse(dados);
  }
  return [];
}

function salvarUsuarios(usuarios){
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(usuarios));
}

function limparCampos(){
  inputNome.value = '';
  inputEmail.value = '';
  inputNome.focus();
}

function renderizarLista(filtro){
  const termo = (filtro || '').toLowerCase().trim();
  const usuarios = obterUsuarios();

  while(listaUsuarios.firstChild){
    listaUsuarios.removeChild(listaUsuarios.firstChild);
  }

  const filtrados = usuarios.filter(function(usuario){
    return usuario.nome.toLowerCase().includes(termo) || usuario.email.toLowerCase().includes(termo);
  });

  filtrados.forEach(function(usuario){
    const li = document.createElement('li');
    li.className = 'item-usuario';

    const spanDados = document.createElement('span');
    spanDados.className = 'dados-usuario';
    spanDados.textContent = usuario.dataEnvio + ' - ' + usuario.nome + ' (' + usuario.email + ')';

    const botaoExcluir = document.createElement('button');
    botaoExcluir.type = 'button';
    botaoExcluir.className = 'botao-excluir-item';
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function(){
      excluirUsuario(usuario.id);
    });

    li.appendChild(spanDados);
    li.appendChild(botaoExcluir);
    listaUsuarios.appendChild(li);
  });
}

function cadastrarUsuario(evento){
  evento.preventDefault();

  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();

  if(!nome || !email){
    return;
  }

  const usuarios = obterUsuarios();

  const jaExiste = usuarios.some(function(usuario){
    return usuario.nome.toLowerCase() === nome.toLowerCase() || usuario.email.toLowerCase() === email.toLowerCase();
  });

  if(jaExiste){
    alert('Já existe um usuário cadastrado com este nome ou e-mail.');
    return;
  }

  const agora = new Date();
  const dataEnvio = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR');

  const novoUsuario = {
    id: Date.now(),
    dataEnvio: dataEnvio,
    nome: nome,
    email: email
  };

  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);

  limparCampos();
  renderizarLista(campoPesquisa.value);
}

function excluirUsuario(id){
  const confirmou = confirm('Deseja realmente excluir este usuário?');
  if(!confirmou){
    return;
  }

  const usuarios = obterUsuarios();
  const atualizados = usuarios.filter(function(usuario){
    return usuario.id !== id;
  });

  salvarUsuarios(atualizados);
  renderizarLista(campoPesquisa.value);
}

function excluirTodos(){
  const usuarios = obterUsuarios();
  if(usuarios.length === 0){
    return;
  }

  const confirmou = confirm('Deseja realmente excluir todos os usuários cadastrados?');
  if(!confirmou){
    return;
  }

  localStorage.removeItem(CHAVE_STORAGE);
  campoPesquisa.value = '';
  renderizarLista('');
}

formCadastro.addEventListener('submit', cadastrarUsuario);
botaoLimpar.addEventListener('click', limparCampos);
botaoExcluirTodos.addEventListener('click', excluirTodos);
campoPesquisa.addEventListener('input', function(){
  renderizarLista(campoPesquisa.value);
});

document.addEventListener('DOMContentLoaded', function(){
  renderizarLista('');
});