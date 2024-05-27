import './App.css';
import Filter from './components/Filter';
import Search from './components/Search';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { useState } from 'react';

function App() {
  const [todos, setTodos]  = useState([
    {
      id:1,
      text: "Desenhar",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:2,
      text: "Fazer pão",
      category: "Casa",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  // Criando funcionalidade de busca do Search
  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("asc")

  // Função que atualiza a lista.
  const addTodo = (text, category) => {
    //Array que recebe pelo Operador 'Spread' todos todos atuais.
    const newTodos = 
      [...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }]

      setTodos(newTodos)
  }

  // Função de Remoção
  const removeTodo = (id) => {
    // Variável array com todos Todos
    const newTodos = [...todos]
    // Variável que encontra e filtra itens de ID diferentes da função e retorna-os, deixando o de ID igual de fora.
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
      // Caso o ID de todo seja diferente do id da função, retorna "todo", senão, "nulo".
    setTodos(filteredTodos)

  }
  // Função de Tarefa Completada, ao invés de filtrar, faremos um map.
  const completeTodo = (id) => {
    const newTodos = [...todos]
    // Diferente do Filter, o Map modifica o array original.
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    // Valida se o ID é igual ao id, muda o isCompleted para o contrário que ele está originalmente (true or false). Senão, retorna todo.
    setTodos(newTodos)
  }

  return (
    <div className="app"> 
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => 
          filter === "All"
            ? true
            : filter === "Completed"
            ? todo.isCompleted
            : !todo.isCompleted
          )
          .filter((todo) => 
           todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => sort === "asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
          )
          .map((todo) => (
          <Todo key={todo.id} 
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            />
          // removeTodo e completeTodo sendo passados como funções para o Componente Todo
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
   );
}

export default App
