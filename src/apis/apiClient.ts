import axiosInstance from "./axiosInstance";

type UserLogin = {
    username : string,
    password : string
}

export const loginUser = (data : UserLogin) => 
    axiosInstance.post(`/auth/login`, data);

export const getCurrentuser = () => 
    axiosInstance.get(`auth/me`);