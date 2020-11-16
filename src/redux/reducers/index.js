import userInforReducer from './UserInfoReducer'
import OrderNotActiveReducer from './OrderNotActiveReducer'

import { combineReducers,} from 'redux'

export const rootReducers = combineReducers({
    userInfo:userInforReducer,
    ordersNotActive:OrderNotActiveReducer
})