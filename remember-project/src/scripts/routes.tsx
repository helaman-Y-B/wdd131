import { createBrowserRouter } from "react-router";  // ← Change this too

// Define your routes
import MainPage from "../pages/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    }
])

export default router;