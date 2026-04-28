import { createBrowserRouter } from "react-router";

// Define your routes
import MainPage from "../pages/main";
import Remember from "../pages/remember";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/remember",
        element: <Remember/>
    }
])

export default router;