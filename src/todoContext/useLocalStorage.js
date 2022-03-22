import {useState, useEffect} from 'react'

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        try {
            setTimeout(() => {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
                // si no hay todos en localstorage
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = []
                } else { // si hay todos en localstorage
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem)
                setLoading(false)
            }, 1000)
        }
        catch (err) {
            setError(err)
        }
    }, [])

    const saveItem = (newItem) => {
        try {
            const stringifyTodos = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifyTodos)
            setItem(newItem)
        }
        catch (error) {
            setError(error)
        }
    }

    return { item, saveItem, loading, error }
}

export { useLocalStorage }