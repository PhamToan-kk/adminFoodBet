import AsyncStorage from '@react-native-community/async-storage';


export const AsyncStorageService = {
    setTokens:(tokens)=>{
        AsyncStorage.setItem('accessToken', tokens.accessToken)
        AsyncStorage.setItem('refreshToken', tokens.refreshToken)

    },
    getAccessToken :async ()=>{
        try{
            const accessToken =  await AsyncStorage.getItem('accessToken')
            if(accessToken !== null) {
                // console.log('acees',accessToken)
                return accessToken
             }else{
                 return;
             }
        }catch (err){
            console.log('err get token',err)
        }
    },
    getRefreshToken : async()=>{
        try{
            const refeshToken =  await AsyncStorage.getItem('refreshToken')
            if(refeshToken !== null) {
                return refeshToken
             } else{
                 return;
             }
        }catch (err){
            console.log('err get token',err)
        }
    },
    clearToken:()=>{
        
    }

}