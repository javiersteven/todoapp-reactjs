import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './Modal.css'
import add_todo from '../assets/img/add_todo.svg'

/* 
Error: Le estaba pasando las props a ModalPortal y no a Modal
*/
function Modal({ saveTodo, onClose, close, children }) {
    const [todo, setTodo] = useState("")

    function handleChange(e) {
        setTodo(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        saveTodo(todo)
        onClose(!close)
        setTodo("")
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <header style={{ textAlign: 'center' }}>
                    <h2>Añade un TODO!</h2>
                </header>
                <img src={add_todo} alt='form png' />
                {children}
                <form className='main-form' onSubmit={handleSubmit}>
                    <label>Escribe el Todo:</label>
                    <input value={todo} onChange={handleChange} autoFocus></input>
                    <button type="submit">Agregar TODO</button>
                </form>
                <button className="btn-close" onClick={() => onClose(!close)}>×</button>
            </div>
        </div>
    )
}

export default function ModalPortal({ onClose, saveTodo, close, children }) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose} close={close} saveTodo={saveTodo}>
            {children}
        </Modal>,
        document.getElementById("modal")
    )
}
