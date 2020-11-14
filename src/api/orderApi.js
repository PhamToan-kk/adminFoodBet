import axiosClient from './AxiosClient'

export const OrderApi = {
    loadOrders :(params)=>{
        const url = "/orders/getListOrders"
        return axiosClient.get(url,{params});
    },
    activeOrder:(orderName)=>{
        const url = "/orders/activeOrder"
        return axiosClient.post(url,{
            orderName:orderName
        });
    },
    getOrderInfo:()=>{
        const url = "/orders/getOrderInfo"
        return axiosClient.get(url)
    }
    
}