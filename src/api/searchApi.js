import { apiAxios } from "./apiAxios"

export const searchRIAService
    = (query) => apiAxios.get(`/search`
        , {
            params: {
                keyword: query
            }
        })
