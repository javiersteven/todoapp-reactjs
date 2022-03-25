import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal({ onClose, close, children }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Añade un TODO!</h2>
                {children}
                <button onClick={() => onClose(!close)}>E<span>❌</span>it</button>
            </div>
        </div>
    )
}

export default function ModalPortal({ onClose, close, children }) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose} close={close}>
            {children}
        </Modal>,
        document.getElementById("modal")
    )
}