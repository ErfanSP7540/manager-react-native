import { CHANGED_EMAIL,
    CHANGED_PASSWORD,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    } from './actioins/types'

const INITIAL_STATE = {
    email:'Erfan3@email.com',
    password:'3',
    loading:false,
    error:'',
    userDB:null,
}

export default (state = INITIAL_STATE, action)=>{
    console.log(action);
    
    switch (action.type) {
        case CHANGED_EMAIL:
            return {...state,email:action.payload}
        case CHANGED_PASSWORD:
            return {...state,password:action.payload}
        case LOGIN:
            return {...state,error:'',loading:true,}
        case LOGIN_SUCCESS:
            return {...state,error:'',loading:false,email:'Erfan3@email.com',password:'3',userDB:action.payload}
        case LOGIN_FAIL:
            return {...state,error:'',loading:false,error:action.payload}
        default:
            return state
    }
} 