import axiosClient from './AxiosClient'

export const foodApi = {
    loadFoods :(params)=>{
        const url = "/foods/getPageFoods"
        return axiosClient.get(url,{params});
    },
    addFood : (name,type,price,urlImg,intro,components)=>{
        const url = "/foods/addFood"
        return axiosClient.post(url,{
            name:name,
            type:type,
            price:price,
            url:urlImg,
            intro:intro,
            components:components,
        });
    }
}