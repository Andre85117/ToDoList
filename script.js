const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.lista-task')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {

        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-deletada" onclick="deletarItem(${index})">
        </li>
        
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
}


function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()
}

function recarregarTela(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas()
}

recarregarTela()
button.addEventListener('click', adicionarNovaTarefa)