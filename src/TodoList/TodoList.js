import React from 'react'
import './TodoList.css'

const todoListStyles = {
    
}

const TodoList = ({ children }) => {
    return (
        <div className="TodoList">
            <ul className="ul">
                {children}
            </ul>
        </div>
    )
}

export { TodoList }