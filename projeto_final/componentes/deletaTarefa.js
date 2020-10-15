const deletarTarefa = (atualiza, id) => { 
 const index = id
 const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
 tarefasCadastradas.splice(index, 1)
 localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
 atualiza()
}

const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id))

    return botaoDeleta
}



export default BotaoDeleta