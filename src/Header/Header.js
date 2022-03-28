import React from 'react'
import {TodoCounter} from '../TodoCounter/TodoCounter.js'
import './Header.css'

const Header = ({allTodos, completed}) => {
    return (
        <header className="title">
            <h1 className="header-title">TODO's App!</h1>
            <TodoCounter 
                allTodos={allTodos}
                completed={completed}
            />
        </header>
    )
}

export { Header }