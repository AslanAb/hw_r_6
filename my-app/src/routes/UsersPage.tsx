import UsersList from "../components/UsersList"
import { Link } from "react-router-dom"

const UsersPage = () => {

    return (
        <div>
            <Link to="/">Todo List</Link>

            <UsersList />
        </div>

    )
}

export default UsersPage