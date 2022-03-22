import './TodoItem.css'

const TodoItem = ({ text, completed, onComplete, onDelete }) => {

    return (
        <li className='TodoItem'> 
            <span
                className='Icon'
                onClick={onComplete}
            >
                👌
            </span>
            <p className={`TodoItem--p ${completed && 'Icon--active'}`}>{text}</p>
            <span
                className='Icon'
                onClick={onDelete}
            >❌</span>
        </li>
    )
}

export { TodoItem }