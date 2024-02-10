import { useSearchParams } from "react-router-dom";

const ListPage = () => {
    //경로 처리를 위한 useParams 경로창에 쓰이는 ?page=2&size=20
    const [queryParams] = useSearchParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo List Page Component {page} --- {size}
            </div>
        </div>
    );
}

export default ListPage;