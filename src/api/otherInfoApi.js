import axiosClient from './AxiosClient'

export const OtherInfoApi = {
    updateOtherInfo:(newDiscountPercent,newShipPrice)=>{
        const url = "/otherinfor/updateInfo"
        return axiosClient.post(url,{
            newDiscountPercent:newDiscountPercent,
            newShipPrice:newShipPrice
        });
    },
    getOtherInfo:()=>{
        const url = "/otherinfor/getOtherInfo"
        return axiosClient.get(url)
    }
}
