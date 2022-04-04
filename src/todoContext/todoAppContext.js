import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoAppContext = createContext()

/* 
valores de prueba:

const defaultTodos = [
    { tarea: "Hacer la exposición de ISIS", complete: true , id: 0},
    { tarea: "Realizar la tarea de programación", complete: true, id: 1 },
    { tarea: "Hacer la tarea de Col: espacio tiempo y dif", complete: false, id: 2 }
] 
*/

const TodoAppContextProvider = ({children}) => {
    // Logica
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS-V1", [])
    const [search, setSearch] = useState('')
    const [show, onShow] = useState(false)
    const todosOk = todos.filter(todo => todo.complete === true).length /* !!todo.complete */
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [todoClicked, setTodoClicked] = useState()

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
    function addTodo(todo) {
        const newTodo = { tarea: todo, complete: false, id: searchedTodos.length + 1 }
        const newListTodo = [...searchedTodos, newTodo]
        saveTodos(newListTodo)
    }
    function obtainTodoClicked(id) {
        const todoIndex = searchedTodos.findIndex(todo => todo.id === id)
        return searchedTodos[todoIndex]
    }

    function updateTodos (newTodo) {
        const todosFilter = searchedTodos.length !== 0 ? searchedTodos.filter(todo => todo.id !== newTodo.id) : 0
        let newTodos = [...todosFilter, newTodo]
        saveTodos(newTodos.sort((a, b) => a.id - b.id ))
    }

    return (
        <TodoAppContext.Provider value={{
            todos,
            todosOk,
            search,
            setSearch,
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            onShow,
            show,
            addTodo,
            showModalUpdate,
            setShowModalUpdate,
            setTodoClicked,
            todoClicked,
            obtainTodoClicked,
            updateTodos
        }}>
            {children}
        </TodoAppContext.Provider>
    )
}

export {TodoAppContext, TodoAppContextProvider}