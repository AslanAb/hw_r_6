import { useState, useEffect } from "react"
import axios from "axios"
import { IUser } from "../types"

interface IAuthor {
    id: number
}

const Author = (props: IAuthor) => {
    
    const [author, setAuthor] = useState<IUser>(Object)
    const getAuthor = async () => {
        try {
            const author = await axios.get("https://jsonplaceholder.typicode.com/users/" + props.id)
            setAuthor(author.data)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getAuthor()
    }, [])

    return (
        <div>
            <h4>Author name: {author.name}</h4>
            <h4>Author tel:{author.phone}</h4>
            <h4>Author email:{author.email}</h4>
        </div>
    )
}
export default Author