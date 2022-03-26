import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './Modal.css'
import { Formik } from 'formik'
import firmware from '../assets/conceptual.svg'

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
        setTodo("")
        console.log(e)
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <header style={{ textAlign: 'center' }}>
                    <h2>Form</h2>
                    <h2>Añade un TODO!</h2>
                </header>
                <img src={firmware} alt='firmware png' />
                {children}
                <form className='main-form' onSubmit={handleSubmit}>
                    <label>Todo</label>
                    <input id="todo" onChange={handleChange}></input>
                    <button type="submit">Agregar TODO</button>
                </form>
                <button className="btn-close" onClick={() => onClose(!close)}><span>❌</span></button>
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

/* 
<Formik
                    initialValues={{
                        todo: ""
                    }}
                    onSubmit={({todo}) => {
                        addTodos(todo)
                    }}
                >
                    {
                        ({handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <label>Todo</label>
                                <input name="todo" onChange={handleChange}></input>
                                <button type="submit">Agregar TODO</button>
                            </form>
                        )
                    }
                </Formik>
*/