import './TodoItem.css'

const TodoItem = ({ text, completed, onComplete, onDelete, setShowModal, showModal, getTodoClicked, setTodoClicked}) => {
    return (
        <li className='TodoItem'>
            <span
                className='Icon'
                onClick={onComplete}
            >
                👌
            </span>
            <span
                className='Icon'
                onClick={() => {
                    setShowModal(!showModal)
                    setTodoClicked(getTodoClicked())
                }}
            >
                🖊
            </span>
            <p className={`${completed && 'Icon--active'}`}>{text}</p>
            <span
                className='Icon'
                onClick={onDelete}
            >❌</span>
        </li>
    )
}

export { TodoItem }