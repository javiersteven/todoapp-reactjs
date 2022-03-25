import './App.css';
import { React, useState } from 'react'
import { useLocalStorage } from '../todoContext/useLocalStorage.js'

import { TodoCounter } from '../TodoCounter/TodoCounter.js'
import { TodoSearch } from '../TodoSearch/TodoSearch.js'
import { CreateTodoBtn } from '../CreateTodoBtn/CreateTodoBtn.js'
import { TodoItem } from '../TodoItem/TodoItem.js'
import { TodoList } from '../TodoList/TodoList.js'
import { Header } from '../Header/Header.js'
import ModalPortal from '../Modal/Modal.js'

const defaultTodos = [
    { tarea: "Hacer la exposición de ISIS", complete: true },
    { tarea: "Realizar la tarea de programación", complete: true },
    { tarea: "Hacer la tarea de Col: espacio tiempo y dif", complete: false }
]

function App() {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS-V1", [])
    const [search, setSearch] = useState('')
    const [show, onShow] = useState(false)
    const todosOk = todos.filter(todo => todo.complete === true).length /* !!todo.complete */

    let searchedTodos = []

    if (!search.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.tarea.toLowerCase()
            const searchText = search.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const completeTodo = (texto) => {
        const todoIndex = todos.findIndex(todo => todo.tarea === texto)
        const newTodos = [...todos]
        newTodos[todoIndex].complete = !newTodos[todoIndex].complete
        saveTodos(newTodos)
    }
    const deleteTodo = (texto) => {
        const todoIndex = todos.findIndex(todo => todo.tarea === texto)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (
        <main className="main-app">
            <Header />
            <TodoCounter allTodos={todos.length} completed={todosOk} />
            <TodoSearch search={search} setSearch={setSearch} />

            {error && <p>Hubo un error!</p>}
            {loading && <p>Estamos cargando!</p>}
            {(loading && !searchedTodos.length) && <p>Crea tu TODO</p>}
            <TodoList>

                {
                    searchedTodos.map(({ complete, tarea }) => {
                        return <TodoItem
                            text={tarea}
                            completed={complete}
                            key={tarea}
                            onComplete={() => completeTodo(tarea)}
                            onDelete={() => deleteTodo(tarea)}
                        />
                    })
                }
            </TodoList>
            <CreateTodoBtn onShow={onShow} show={show} />
            {
                show && <ModalPortal onClose={onShow} close={show} />
            }
        </main>
    )
}

export default App;
