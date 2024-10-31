import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import HomePage from "../pages/HomePage";
import TotalPage from "../pages/TotalPage";

export const router = [
    {path: "", element: <MainLayout/>, children: [
            {path: "home", element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "totalPage", element: <TotalPage/>},
        ]}
]


export const routes = createBrowserRouter(router);