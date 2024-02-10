import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"))

const todoRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={Loading}> <TodoList/> </Suspense>
        },
        {
            path: "",  // todo 클릭시 자동으로 list 연결 Navigate
            element: <Navigate replace to ="list"/>
        },
        {
            path: "read/:tno", // :tno에서 :은 경로의 일부를 변수로 사용하기 위한 설정
            element: <Suspense fallback={Loading}> <TodoRead/> </Suspense>
        },
        {
            path: "add",
            element: <Suspense fallback={Loading}> <TodoAdd/> </Suspense>
        },
        {
            path: "modifiy/:tno",
            element: <Suspense fallback={Loading}> <TodoModify/> </Suspense>
        }
    ]
}

export default todoRouter;