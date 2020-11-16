import axios from 'axios';
import {store} from '../store'
import {OrderApi} from '../../api/orderApi'

export const actSetOrdersNotActive = (data) => {
    return{
        type:'SET_ORDERS_NOT_ACTIVE',
        data:data
    }
}
export const ReadedAllOrders = () => {
    return{
        type:'READED_ALL_ORDERS',
    }
}


export const InscreaseCountOrder = () => {
    return{
        type:'INCREASE_COUNT_ORDER',
        payload:1
    }
}

export const actGetOrderNoActive = () => {
    return async (dispatch) => {
           const data = await OrderApi.getListOrderNotActive()
        //    console.log('data',data)
            dispatch(actSetOrdersNotActive(data))
           
    }
}
