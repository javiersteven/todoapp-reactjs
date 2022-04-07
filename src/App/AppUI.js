import React, { useContext } from 'react'
import { TodoAppContext } from '../todoContext/todoAppContext.js'

import { TodoSearch } from '../TodoSearch/TodoSearch.js'
import { CreateTodoBtn } from '../CreateTodoBtn/CreateTodoBtn.js'
import { TodoItem } from '../TodoItem/TodoItem.js'
import { TodoList } from '../TodoList/TodoList.js'
import { Header } from '../Header/Header.js'
import ModalPortal from '../Modal/Modal.js'

import ModalUpdateTodo from '../ModalUpdateTodo/modalUpdate.js'

const AppUI = () => {
    const {
        todos,
        todosOk,
        search,
        setSearch,
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        onShow,
        show,
        addTodo,
        showModalUpdate,
        setShowModalUpdate,
        obtainTodoClicked,
        setTodoClicked,
        todoClicked,
        updateTodos
    } = useContext(TodoAppContext)

    return (
        <main className="main-app">
            <Header allTodos={todos.length} completed={todosOk} />
            <TodoSearch search={search} setSearch={setSearch} />

            {error && <p>Hubo un error!</p>}
            {loading && <p>Estamos cargando!</p>}
            {(loading || !searchedTodos.length) && <p>Añade un TODO</p>}
            <TodoList>

                {
                    searchedTodos.map(({ complete, tarea, id }) => {
                        return <TodoItem
                            text={tarea}
                            completed={complete}
                            key={id}
                            onComplete={() => completeTodo(tarea)}
                            onDelete={() => deleteTodo(tarea)}
                            showModal={showModalUpdate}
                            setShowModal={setShowModalUpdate}
                            setTodoClicked={setTodoClicked}
                            getTodoClicked={() => obtainTodoClicked(id)}
                        />
                    })
                }
            </TodoList>
            <CreateTodoBtn onShow={onShow} show={show} />
            {
                show && <ModalPortal saveTodo={addTodo} onClose={onShow} close={show} />
            }
            {
                showModalUpdate && (<ModalUpdateTodo
                    show={showModalUpdate}
                    setShow={setShowModalUpdate}
                    todoClicked={todoClicked} 
                    updateTodos={updateTodos}
                />)
            }
        </main>
    )
}

export { AppUI }