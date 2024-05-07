import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";
import {AdminPage} from "./pages/AdminPage.tsx";
import {AdminLayout} from "./components/layouts/Admin/AdminLayout.tsx";
import {UserManager} from "./pages/Admin/Users/UserManager.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: "/auth",
      element: <AuthPage />,
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
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App
