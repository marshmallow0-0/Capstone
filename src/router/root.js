import { Suspense, lazy } from "react";
import AboutPage from "../pages/todo/AboutPage";
import todoRouter from "./todoRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/todo/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
const TodoList = lazy(() => import("../pages/todo/ListPage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children: todoRouter() // todo 파일 접근 편리하게
    }
])

export default root;