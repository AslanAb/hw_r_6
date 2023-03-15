import TodoItem from "../components/TodoItem"
import {Link} from "react-router-dom"
const TodosPage = () => {
    return (
        <div>
            <Link to="/users">Users</Link>
            <h1>To do list:</h1>
            <TodoItem />
        </div>
        
    )
}

export default TodosPage