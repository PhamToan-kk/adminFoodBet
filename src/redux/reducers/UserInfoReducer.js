const initialState = {
     username:"",
     phone:"",
     id:"",
     role:"",
    
 }

 
 const userInforReducer = (state = initialState, actions) => {
    // console.log('action set users 111',actions)
    const newUser = {...state.user}
    switch (actions.type) {
        case 'SET_USER_INFOR':
            newUser.username = actions.username
            newUser.id = actions.id
            newUser.phone = actions.phone
            newUser.role = actions.role
            return newUser;
        default:
            return {...state}
    }
}


export default userInforReducer