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
    },
    updateFood : (_id,name,type,price,urlImg,intro,components)=>{
        const url = "/foods/updateFood"
        return axiosClient.patch(url,{
            _id:_id,
            name:name,
            type:type,
            price:price,
            url:urlImg,
            intro:intro,
            components:components,
        });
    },
    deleteFood : (_id)=>{
        const url = "/foods/deleteFood"
        return axiosClient.post(url,{
            _id:_id,
        });
    }

}