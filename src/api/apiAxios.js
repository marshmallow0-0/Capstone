import axios from "axios"

export const apiAxios = axios.create(
    // axios.create() 메서드를 사용하여 새로운 Axios 인스턴스를 생성
    {
        baseURL: 'http://localhost:8080'
        //API의 기본 URL을 설정
    }
)