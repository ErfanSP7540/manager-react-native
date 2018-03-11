import { CHANGED_EMAIL , CHANGED_PASSWORD } from './actioins/types'

export default (state, action)=>{
    console.log(action);
    
    switch (action.type) {
        case CHANGED_EMAIL:
            return {user:state.user,email:action.payload}
        case CHANGED_PASSWORD:
            return {...state,password:action.payload}
        default:
            return {email:'',password:''}
    }
}