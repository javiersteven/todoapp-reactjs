import './App.css';
import React from 'react'

import { AppUI } from './AppUI.js'
import { TodoAppContextProvider } from '../todoContext/todoAppContext';

const defaultTodos = [
    { tarea: "Hacer la exposición de ISIS", complete: true },
    { tarea: "Realizar la tarea de programación", complete: true },
    { tarea: "Hacer la tarea de Col: espacio tiempo y dif", complete: false }
]

function App() {
    return (
        <TodoAppContextProvider>
            <AppUI/>
        </TodoAppContextProvider>
    )
}

export default App;
