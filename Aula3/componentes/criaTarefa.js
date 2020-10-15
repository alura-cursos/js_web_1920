import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
 

export const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[]
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataFormatada = data.format('DD/MM/YYYY')

    const dados = { 
        valor,
        dataFormatada
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()
    
}

export const Tarefa = ({ valor, dataFormatada }) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
   
    return tarefa

}
