import { createBrowserRouter } from "react-router-dom";
import { TodosPage, UsersPage } from "./routes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <TodosPage />
    },
    {
        path: "/users",
        element: <UsersPage />
    }
])

export default router