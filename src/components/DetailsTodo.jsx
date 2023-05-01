import { useContext } from "react";
import { useParams } from "react-router-dom"
import { TodoContext } from "../context/TodoContext";
import TodoCard from "./TodoCard";

const DetailsTodo=()=>{
    const {id}=useParams();
    const {todoItems}=useContext(TodoContext)
    const selectedTask=todoItems.find(ele=>ele.id===Number(id))
    return(
        <TodoCard item={selectedTask}/>
    )
}
export default DetailsTodo