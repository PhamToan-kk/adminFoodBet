


const initialState = {
    count:'',
}

const OrdersNotAciveReducer = (state = initialState, actions) => {
   // console.log('action set users 111',actions)
//    const newUser = {...state.user}
        const newCountOrders = {...state}
   switch (actions.type) {
       case 'SET_ORDERS_NOT_ACTIVE':
           return {
               ...state,
               count:actions.data.length,
           };
        break;
        case 'READED_ALL_ORDERS':
            return{
                ...state,
                count:0
            }   
        break;
        case "INCREASE_COUNT_ORDER":
            return {
                ...state,
                count:newCountOrders.count+actions.payload
            }    
       default:
           return {...state}
   }
}


export default OrdersNotAciveReducer