import { Suspense, lazy } from "react";
import SearchFailPage from "../pages/SearchFailPage";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
const How = lazy(() => import("../pages/HowToUsePage"))
const Who = lazy(() => import("../pages/WhoWeArePage"))
const Login = lazy(() => import("../pages/LoginPage"))
const MyProfile = lazy(() => import("../pages/MyProfilePage"))
const Search = lazy(() => import("../pages/SearchPage"))

const root = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "/search",
        element: <Suspense fallback={Loading}><Search /></Suspense>//search 라우트 추가
    },
    {
        path: "/how",
        element: <Suspense fallback={Loading}><How /></Suspense>//how 라우트 추가 
    },
    ,
    {
        path: "/who",
        element: <Suspense fallback={Loading}><Who /></Suspense> //who 라우트 추가 
    },
    ,
    {
        path: "/fail",
        element: <Suspense fallback={Loading}><SearchFailPage /></Suspense>
    },
    {
        path: "/myprofile",
        element: <Suspense fallback={Loading}><MyProfile /></Suspense> //myprofile 라우트 추가 
    },
    {
        path: "/login",
        element: <Suspense fallback={Loading}><Login /></Suspense>//login 라우트 추가 
    }
])

export default root;