import { React } from 'react'
import './TodoSearch.css'

const TodoSearch = ({ search, setSearch }) => {

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="todoSearchWraper">
            <div className="todoSearch" >
                <span>🔎</span>
                <input
                    placeholder="Search"
                    onChange={handleOnChange}
                    value={search}
                />
            </div>
        </div>
    )
}

export { TodoSearch }