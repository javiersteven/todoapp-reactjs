import React from 'react'

const todoListStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const TodoList = ({ children }) => {
    return (
        <ul style={todoListStyles}>
            {children}
        </ul>
    )
}

export { TodoList }