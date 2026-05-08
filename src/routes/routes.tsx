import { createBrowserRouter } from "react-router-dom";

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
    },
    {
        path: "/feedback",
        element: <MainPage/>  // Placeholder - replace with actual Feedback component
    }
])

export default router;