const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("ativo"); 
  }else{
    addBtn.classList.remove("ativo");
  }
}
mostrarTarefas();

addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("Nova Tarefa");
  if(getLocalStorageData == null){ 
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue); 
  localStorage.setItem("Nova Tarefa", JSON.stringify(listArray)); 
  mostrarTarefas(); 
  addBtn.classList.remove("ativo"); 
}
function mostrarTarefas(){
  let getLocalStorageData = localStorage.getItem("Nova Tarefa");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const tarefasPendentesNumb = document.querySelector(".tarefasPendentes");
  tarefasPendentesNumb.textContent = listArray.length;
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("ativo"); 
  }else{
    deleteAllBtn.classList.remove("ativo");
  }
  let novaTagLi = "";
  listArray.forEach((element, index) => {
    novaTagLi += `<li>${element}<span class="icon" onclick="apagarTarefa(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = novaTagLi;
  inputBox.value = ""; 
}
function apagarTarefa(index){
  let getLocalStorageData = localStorage.getItem("Nova Tarefa");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("Nova Tarefa", JSON.stringify(listArray));
  mostrarTarefas(); 
}
deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("Nova Tarefa", JSON.stringify(listArray));
  mostrarTarefas();
}