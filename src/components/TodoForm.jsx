import {useState} from 'react'

const TodoForm = ({ addTodo }) => {
    const [ value, setValue] = useState("")
    const [category, setCategory] = useState("")

    // Função responsável para lidar com submit do Form
    const handleSubmit = (e) => {
        e.preventDefault()
        // Retorna caso a tarefa ou categoria estiverem retornando em branco.
        if (!value || !category) return
        // Adiciona Todo a lista.
        addTodo(value, category)
        //Limpa os campos do input após clicar em Criar Tarefa.
        setValue("")
        setCategory("")
    }

  return (
    <div className="todo-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}> 
            <input type="text" 
                placeholder='Digite a tarefa' 
                value={value}
                onChange={(e) => setValue(e.target.value)} 
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione a Categoria</option>
                <option value="Casa">Casa</option>
                <option value="Compras">Compras</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm