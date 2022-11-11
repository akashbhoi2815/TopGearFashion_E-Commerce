import * as types from './actionTypes'

const initState={
    mensdata:[],
    isLoading:false,
    isError:false
}

export const appReducer=(oldState=initState,{type,payload})=>{
    switch(type){
        case types.GETMEN_REQUEST:{ 
            return{
                ...oldState,
                isLoading:true,
                isError:false
            }
        }
        case types.GETMEN_SUCCESS:{
            return{
                ...oldState,
                mensdata:payload,
                isLoading:false,
                isError:false
            }
        }
        case types.GETMEN_FAILURE:{
            return{
                ...oldState,
                isLoading:false,
                isError:true
            }
        }
        default:
            return oldState
    }
}