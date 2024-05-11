import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "./pages/MainPage.tsx";
import {AuthPage} from "./pages/AuthPage.tsx";
import {AdminPage} from "./pages/AdminPage.tsx";
import {AdminLayout} from "./components/layouts/AdminLayout.tsx";
import {UserManager} from "./pages/Admin/Users/UserManager.tsx";
import {UserProfileAdmin} from "./components/UserProfileAdmin/UserProfileAdmin.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />
        },
        {
            path: '/auth',
            element: <AuthPage />
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    index: true,
                    element: <AdminPage />
                },
                {
                    path: 'users/manager',
                    element: <UserManager />
                },
                {
                    path: 'users/manager/:uuid',
                    element: <UserProfileAdmin />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />
}

export default App
