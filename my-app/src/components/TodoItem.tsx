import {useState, useEffect} from "react"
import { ITodo } from "../types"
import axios from "axios"
import Author from "./Author"


const TodoItem = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const getTodos = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            setTodos(res.data)
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            {todos.map(todo => {
                return (
                    <div key={todo.id} className="todo">
                        <Author id={todo.userId}/>
                        <h3 className={todo.completed? "completed" : ""}>Title: {todo.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoItem