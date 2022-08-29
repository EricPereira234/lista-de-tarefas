
//variáveis que pegam os ids
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

//arrey que guarda as tarefas
let tarefas = JSON.parse(localStorage.getItem('@lista')) || [];

//renderisando tarefas
function renderTarefas() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement('li');//criando o <li>
    let linkExcluir = document.createElement('a');
    let texExcluir = document.createTextNode(' [ excluir ]');
    let textoLista = document.createTextNode(todo);


    //pegando a posição do array para poder excluir
    let posicao = tarefas.indexOf(todo);

    //configurando os elementos
    //configuração do link excluir
    linkExcluir.setAttribute('href', '#');
    linkExcluir.appendChild(texExcluir);//passando o texto para o elemento <a>
    linkExcluir.setAttribute('onclick', `acaoExcluir(${posicao})`);//colocando ação no link

    //configuração da lista
    liElement.appendChild(textoLista);// mandando o texto para o li
    liElement.appendChild(linkExcluir);//render button no li
    listElement.appendChild(liElement);//render lista no <ul>



  })
}

function adicionarTarefas() {
  if (inputElement.value === '') {
    alert("Digite alguma tarefa");
    return false;
  } else {
    let novaTarefa = inputElement.value;//variável de escopo que pega o value do input

    tarefas.push(novaTarefa);
    inputElement.value = '';

  }

  renderTarefas();
  savaLocalStorage();


}

function acaoExcluir(posicao) {
  tarefas.splice(posicao, 1);
  renderTarefas();
  savaLocalStorage();
}

//função que salva dados no localStorage
function savaLocalStorage() {
  localStorage.setItem('@lista', JSON.stringify(tarefas));
}

buttonElement.onclick = adicionarTarefas;//adicionando a ação para o buttom

//renderizando a lista 
renderTarefas();