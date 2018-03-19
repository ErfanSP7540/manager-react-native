
import { EMPLOYEE_UPDATE ,
         EMPLOYEE_INSERT_SUCCESS,
         EMPLOYEE_INSERT_FAILED, 
         EMPLOYEE_LOADING,
        } from './actioins/types'

const INIT_STATE={
    emp_name:'',
    emp_phone:'',
    emp_shift:'',
    emp_loading:false,
    emp_error:'',
}

export default (state = INIT_STATE,action)=>{
    
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        // const newState={}
        // newState[action.payload.prop]
        
            return {...state , [action.payload.prop]:action.payload.value }
        case EMPLOYEE_LOADING: 
            return {...state.employeeForm , emp_loading:true  }
        case EMPLOYEE_INSERT_SUCCESS:
            console.log('EMPLOYEE_INSERT_SUCCESS');
            console.log(state);
            
            return { ...INIT_STATE }
        case EMPLOYEE_INSERT_FAILED:
            return {...state, emp_error:action.payload,emp_loading:false }
        default: 
            return state;
            break;
    }
}