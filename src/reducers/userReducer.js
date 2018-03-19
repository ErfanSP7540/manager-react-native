import { CHANGED_EMAIL,
    CHANGED_PASSWORD,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    } from './actioins/types'

const INITIAL_STATE = {
    email:'erfan1@email.com',
    password:'12345667s',
    loading:false,
    error:'',
    userDB:null,
}

export default (state = INITIAL_STATE, action)=>{

    
    switch (action.type) {
        case CHANGED_EMAIL:
        return {...state,email:action.payload}
        case CHANGED_PASSWORD:
        return {...state,password:action.payload}
        case LOGIN:
        return {...state,error:'',loading:true,}
        case LOGIN_SUCCESS:
            console.log('userReducer :: INITIAL_STATE >',INITIAL_STATE);
            return INITIAL_STATE
        case LOGIN_FAIL:
            return {...state,error:'',loading:false,error:action.payload}
        default:
            return state
    }
} 