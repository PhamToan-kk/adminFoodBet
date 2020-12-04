import axiosClient from './AxiosClient'

export const OrderApi = {
    loadOrders :(params)=>{
        const url = "/orders/getListOrders"
        return axiosClient.get(url,{params});
    },
    activeOrder:(orderName)=>{
        const url = "/orders/activeOrder"
        return axiosClient.patch(url,{
            orderName:orderName
        });
    },
    getOrderInfo:()=>{
        const url = "/orders/getOrderInfo"
        return axiosClient.get(url)
    },
    getListOrderNotActive:()=>{
        const url = "orders/adminGetOrderNotActive"
        return axiosClient.get(url)
    }
    
}