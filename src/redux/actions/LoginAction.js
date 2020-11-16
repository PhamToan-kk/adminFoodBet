import axios from 'axios';
import {store} from '../store'
import {authApi} from '../../api/AuthApi'

export const actSetUserInfor = (data) => {
    return{
        type:'SET_USER_INFOR',
        username:data.username,
        id:data.id,
        phone:data.phone,
        role:data.role
    }
}

export const actSignIn = (username,password) => {
    return async (dispatch) => {
           const data = await authApi.login(username,password)
        //    console.log('data',data)
            dispatch(actSetUserInfor(data))
           
    }
}
