import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoCard from "./TodoCard"

const OpenTasks = () => {
    const { todoItems } = useContext(TodoContext)
    const openTasks=todoItems.filter(({ isCompleted }) => !isCompleted)
    return (
        <div>
            <h4>Open Tasks: {openTasks.length}</h4>
            {
                openTasks.map(ele => <TodoCard key={ele.id} item={ele} expandTodo={true} />)
            }
        </div>
    )
}

export default OpenTasks 