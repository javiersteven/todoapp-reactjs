import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({ allTodos, completed }) => {
    return (
        <h2 className="todo-counter">
            Completaste <span>{completed}</span> de <span>{allTodos}</span> TODOs
        </h2>
    )
}

export { TodoCounter }