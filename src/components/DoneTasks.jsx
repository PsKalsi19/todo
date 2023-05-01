import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoCard from "./TodoCard"

const DoneTasks=()=>{
    const { todoItems } = useContext(TodoContext)
    const completedTodos=todoItems.filter(({ isCompleted }) => isCompleted)
    return(
        <div>
            <h4>Done Todos: {completedTodos.length}</h4>
        {
            completedTodos.map(ele =>
                 <TodoCard 
                 key={ele.id} 
                 item={ele} 
                 expandTodo={true} />)
        }
    </div>
    )
}

export default DoneTasks