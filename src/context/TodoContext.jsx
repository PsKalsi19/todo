import { createContext, useState } from "react";

export const TodoContext = createContext()
// eslint-disable-next-line react/prop-types
export default function TodoProvider({ children }) {
    const [todos, setTodos] = useState([])
    const markTodoAsCompleted = (id) => {
        setTodos(todos.map(ele => ele.id === Number(id) ? { ...ele, isCompleted: true } : ele))
    }
    return ( 
        <TodoContext.Provider value={{
            todoItems: todos,
            setTodoItems: setTodos,
            markTodoAsCompletedFn: markTodoAsCompleted
        }}>
            {children}
        </TodoContext.Provider>
    )
}