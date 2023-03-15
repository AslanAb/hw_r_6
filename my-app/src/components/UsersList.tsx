import { IUser } from "../types"
import { useState, useEffect } from "react"
import axios from "axios"

const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const getUsers = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => {
                return (
                    <div key={user.id} className="todo">
                        <h2>{user.name}</h2>
                        <h3>Email: {user.email}</h3>
                        <h4>Tel: {user.phone}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default UsersList
