import {createBrowserRouter} from "react-router";
import Welcome from "../pages/welcome/Welcome.tsx";
// import Register from "../pages/register/Register.tsx";
// import Login from "../pages/login/Login.tsx";
import Main from "../pages/main/Main.tsx";
import {MyPosts} from "../pages/my-posts/My-posts.tsx";
import {CreatePost} from "../pages/create-post/create-post.tsx";
import {EditPost} from "../pages/edit-post/edit-post.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Welcome
    },
    // {
    //     path: "/register",
    //     Component: Register
    // },
    // {
    //     path: "/login",
    //     Component: Login
    // },
    {
        path: "/main",
        Component: Main
    },
    {
        path: "/my-posts",
        Component: MyPosts
    },
    {
        path: "/create-post",
        Component: CreatePost
    },
    {
        path: "/edit-post",
        Component: EditPost
    },
]);