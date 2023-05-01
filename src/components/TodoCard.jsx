/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom"
import { TodoContext } from "../context/TodoContext";

const TodoCard=({item,expandTodo=false})=>{
    const {markTodoAsCompletedFn}=useContext(TodoContext)
    const location=useLocation()
    const{title,description,isCompleted,id}=item;
    
    const completedTasksStyles={textDecoration:isCompleted && !location.pathname.includes('/details') && 'line-through'}
    
 
    return(
        <section>
            <h2 style={completedTasksStyles}>{title}</h2>
            <p style={completedTasksStyles}>{description}</p>
           { expandTodo &&
           <div>
               <p> Status: <strong>{isCompleted?'Done':'Not Done'}</strong></p>
               <Link to={`/details/${id}`} > Expand Todo</Link>
               
           </div>
           }
          { location.pathname==='/' && <button onClick={()=>markTodoAsCompletedFn(id)} disabled={isCompleted}>Mark as Done</button>}
            <hr />
        </section>
    )
}

export default TodoCard