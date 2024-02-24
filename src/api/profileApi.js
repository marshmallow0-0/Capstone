import { apiAxios } from "./apiAxios";

export const retrieveMyProfileApi
    = (userid) => apiAxios.get(`/users/${userid}/myProfiles`)

export const deleteMyProfileApi
    = (userid, profileid) => apiAxios.get(`/users/${userid}/profiles/${profileid}`)

export const updateMyProfileApi
    = (userid, myProfile) => apiAxios.put(`/users/${userid}/profiles/${userid}`, myProfile)

export const createMyProfileApi
    = (userid, myProfile) => apiAxios.post(`/users/${userid}/profiles`, myProfile)
