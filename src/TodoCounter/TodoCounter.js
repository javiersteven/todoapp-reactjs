import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({allTodos, completed}) => {
    return (
        <h2 className="todo-counter">Se {(completed === 1 && "ha") || "han"} completado {completed} de {allTodos} TODOs</h2>
    )
}

export { TodoCounter }