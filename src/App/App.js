import './App.css';
import React from 'react'

import { AppUI } from './AppUI.js'
import { TodoAppContextProvider } from '../todoContext/todoAppContext';

function App() {
    return (
        <TodoAppContextProvider>
            <AppUI/>
        </TodoAppContextProvider>
    )
}

export default App;
