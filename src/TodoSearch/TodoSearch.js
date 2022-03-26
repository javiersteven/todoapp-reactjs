import { React } from 'react'
import './TodoSearch.css'

const TodoSearch = ({search, setSearch}) => {

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <input
            placeholder="Search 🔎"
            onChange={handleOnChange}
            value={search}
        />
    )
}

export { TodoSearch }