import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoAppContext = createContext()

const TodoAppContextProvider = ({children}) => {
    // Logica
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
    function addTodo(todo) {
        const newTodo = { tarea: todo, complete: false }
        const newListTodo = [...searchedTodos, newTodo]
        saveTodos(newListTodo)
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
            addTodo
        }}>
            {children}
        </TodoAppContext.Provider>
    )
}

export {TodoAppContext, TodoAppContextProvider}