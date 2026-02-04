import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Login from "./pages/login/Login.tsx";
import {Layout} from "./shared/components/Layout.tsx";
import Register from "./pages/register/Register.tsx";
import Main from "./pages/main/Main.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello World</div>,
        },
        {
            path: "/register",
            Component: Register
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/main",
            Component: Main
        },
    ]);

  return (
      <>
          <Layout>
              <RouterProvider router={router} />
          </Layout>
      </>
  )
}

export default App
