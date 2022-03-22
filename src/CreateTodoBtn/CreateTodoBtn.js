import React from 'react'
const btnStyles = {
    border: "2px solid #ECECED",
    width: "90px",
    height: "33px",
    borderRadius: "30px",
    fontSize: "20px",
    backgroundColor: "#1C73D3",
    color: "#ECECED",
    cursor: "pointer"
}

const CreateTodoBtn = () => {
    const handleClic = () => {
        console.log("clic")
    }
    return (
        <button
        style={btnStyles}
        onClick={handleClic}
        >
            +
        </button>
    )
}

export { CreateTodoBtn }