import React from 'react'
import styled from 'styled-components'
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