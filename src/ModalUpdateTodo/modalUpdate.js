import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './modalUpdate.css'


const ModalUpdate = ({ show, setShow, todoClicked, updateTodos }) => {
    const [tarea, setTarea] = useState(todoClicked.tarea)
    const handleOnChange=(e)=>{
        setTarea(e.target.value)
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        const newTodo = {
            tarea: tarea,
            complete: todoClicked.complete,
            id: todoClicked.id
        }
        updateTodos(newTodo)
        setShow(!show)
    }
    return (
        <div className="modal-up-wp">
            <div className="modal-up-cnt">
                <h2>EDITA EL TODO!</h2>
                <form className="modal-form" onSubmit={handleOnSubmit}>
                    <label>Todo: </label>
                    <input type="text" value={tarea} onChange={handleOnChange} autoFocus/>
                    <div className="buttons">
                    <button type="submit">Actualizar Todo</button>
                    <button type="button" onClick={() => setShow(!show)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default function ModalUpdateTodo({ show, setShow, todoClicked, children, updateTodos }) {
    return ReactDOM.createPortal(
        <ModalUpdate 
            show={show} 
            setShow={setShow}
            todoClicked={todoClicked}
            updateTodos={updateTodos}
        >
            {children}
        </ModalUpdate>,
        document.getElementById("modal-updateTodo")
    )
}