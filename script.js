//variáveis que pegam os elementos html
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
//variável que guarda o array da lista
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas(){
  listElement.innerHTML = "";

  tarefas.map((todo)=>{
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode(" [ Excluir ]");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);


  })

}

renderTarefas();

function adicionarTarefas(){
  if(inputElement.value === ''){
    alert("Digite alguma tarefa");
    return false;
  }else{
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa)
    inputElement.value = '';

    renderTarefas();
    salvarDados();

  }

}

buttonElement.onclick = adicionarTarefas;// adicionando ação ao buttom


function deletarTarefa(posicao){
  tarefas.splice(posicao, 1);
  renderTarefas();
  salvarDados();
}


function salvarDados(){
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas) )
}