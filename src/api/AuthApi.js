import axiosClient from "./AxiosClient";


export const authApi = {
    login :(username,password)=>{
        const url = "/authen/login"
        return axiosClient.post(url,{
            username:username,
            password:password
        });
    },
}