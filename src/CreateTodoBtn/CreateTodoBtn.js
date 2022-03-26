import React from 'react'
import './CreateTodoBtn.css'


const CreateTodoBtn = ({onShow, show}) => {
    const handleClic = () => {
        onShow(!show)
    }
    return (
        <button
        onClick={handleClic}
        className="btn"
        >
            +
        </button>
    )
}

export { CreateTodoBtn }