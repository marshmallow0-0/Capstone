// // 조회 페이지에서 수정/삭제로 이동할 수 있는 버튼 추가. 수정/삭제 작업은 매번 달라지는 번호(tno)를 사용하기 때문에 고정된 링크가 아닌 useParams()로 찾아낸 번호를 사용해야만 함.
// // 매번 페이지 번호가 달라질 수 있으므로 이에 대한 동적처리 역시 필요함.
// // /todo/modify/번호 경로로 이동할 수 있는 기능을 추가.

// import { useCallback } from "react";
// import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

// const ReadPage = () => {

//     const {tno} = useParams()
//     //tno의 변수 확인을 위해
//     const navigate = useNavigate()
    
//     const [queryParams] = useSearchParams()
//     //쿼리 스트링의 유지
//     const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
//     const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

//     const queryStr = createSearchParams({page, size}).toString()

//     const moveToModify = useCallback((tno) => {
//         navigate({
//             pathname:`/todo/modify/${tno}`,
//             search: queryStr
//         })
//     }, [tno, page, size])
//     //조회 -> 목록으로 이동하는 경우도 많기 때문에 이를 위한 함수 추가
//     const moveToList = useCallback(() => {
//         navigate({pathname:`/todo/list`, search: queryStr})
//     }, [page, size])

//     //moveToModify(33) -- /todo/read/33일 경우
//     return (
//         <div className="text-3xl font-extrabold"> 
//             Todo Read Page Component {tno} aa
//             <div>
//                 <button onClick={() => moveToModify(33)}>Test Modify</button> 
//                 <button onClick={() => moveToList()}>Test List</button>
//             </div>
//         </div>
//     );
// }

// export default ReadPage;