
import { 
     EMPLOYEE_UPDATE,
     EMPLOYEE_INSERT_SUCCESS,
     EMPLOYEE_INSERT_FAILED,
     EMPLOYEE_LOADING,

     EMPLOYEE_SAVE_SUCCESS,
     EMPLOYEE_SAVE_FAILED,
     EMPLOYEE_LOADING_SVE,

     EMPLOYEE_DELETE_SUCCESS,
     EMPLOYEE_DELETE_FAILED,
     EMPLOYEE_LOADING_DEL,
     EMPLOYEE_ModalShow_DEL

        } from './actioins/types'

const INIT_STATE={
    emp_name:'',
    emp_phone:'',
    emp_shift:'',
    emp_loading:false,
    emp_loading_del:false,
    emp_loading_sve:false,
    emp_error:'',
    emp_error_del:'',
    emp_modalShow_del:false,
    emp_error_sve:'',
}

export default (state = INIT_STATE,action)=>{
    
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state , [action.payload.prop]:action.payload.value }
        case EMPLOYEE_LOADING: 
            return {...state , emp_loading:true  }
        case EMPLOYEE_INSERT_SUCCESS:            
            return { ...INIT_STATE }
        case EMPLOYEE_INSERT_FAILED:
            return {...state, emp_error:action.payload,emp_loading:false }


        case EMPLOYEE_ModalShow_DEL:
            return {...state ,emp_error_del:'',emp_modalShow_del:action.payload}
        case EMPLOYEE_LOADING_DEL:
            return {...state ,emp_modalShow_del:true,emp_error_del:'', emp_loading_del:true  }
        case EMPLOYEE_DELETE_SUCCESS:
            return { ...INIT_STATE }
        case EMPLOYEE_DELETE_FAILED:
            return {...state,emp_modalShow_del:true, emp_error_del:action.payload,emp_loading_del:false }

        case EMPLOYEE_LOADING_SVE:
            return {...state,emp_error_sve:'' , emp_loading_sve:true  }
        case EMPLOYEE_SAVE_SUCCESS:
            return { ...INIT_STATE }
        case EMPLOYEE_SAVE_FAILED:
            return {...state, emp_error_sve:action.payload,emp_loading_sve:false }

        default: 
            return state;
            break;
    }
}