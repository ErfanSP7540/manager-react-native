import { EMPLOYEE_UPDATE } from './actioins/types'

const INIT_STATE={
    name:'erfan',
    phone:'09189557540',
    shift:'',
}

export default (state = INIT_STATE,action)=>{
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        // const newState={}
        // newState[action.payload.prop]
            return {...state , [action.payload.prop]:action.payload.value }
        default:
            return state;
            break;
    }
}