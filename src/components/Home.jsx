/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import fakeFetch from "../database/todosData"
import { TodoContext } from "../context/TodoContext"
import TodoCard from "./TodoCard"
const Home = () => {
    const { todoItems,setTodoItems } = useContext(TodoContext)
    useEffect(() => {
        console.log('Inside effect');
        if(!todoItems)
        getData()
    }, [])

    const getData = async () => {
        const promisedData = await fakeFetch('https://example.com/api/todos')
        const data = await promisedData;
        setTodoItems(data.data.todos);
    }
    return ( todoItems.length>0 &&
        todoItems.map(ele=><TodoCard key={ele.id} item={ele} expandTodo={false} />) 
    )
}

export default Home