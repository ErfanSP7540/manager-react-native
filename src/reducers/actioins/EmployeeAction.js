
import { EMPLOYEE_UPDATE ,
         EMPLOYEE_INSERT_SUCCESS,
         EMPLOYEE_INSERT_FAILED,
         EMPLOYEE_LOADING,
         EMPLOYEE_LOADING_DEL,
         EMPLOYEE_LOADING_SVE,
         EMPLOYEE_SAVE_SUCCESS,
         EMPLOYEE_SAVE_FAILED,
         EMPLOYEE_DELETE_FAILED,
         EMPLOYEE_ModalShow_DEL
   } from './types'
   
import DB from '../../dataBase'
import {Actions} from 'react-native-router-flux'

export const employeeUpdate = ({prop,value})=>{

    console.log('EmployeeAction = ' ,prop,':', value);
    
    return ({
        type:EMPLOYEE_UPDATE,
        payload:{prop,value},
    })
}

export const employeeInsert = ({emp_name,emp_phone,emp_shift})=>{
    return( dispatch=>{

        dispatch({ type:EMPLOYEE_LOADING })
        
        DB.insertEmployee({emp_name,emp_phone,emp_shift})
        .then( action=>{
                dispatch(action);
                if(DB.insert_employee_success){
                    Actions.main();
                }
            })
        .catch( e=>{
            dispatch({ type:EMPLOYEE_INSERT_FAILED , payload:'Network connection failed'})
        })
     })
}

export const employeeSave = ({emp_name,emp_phone,emp_shift,emp_id})=>{
    return( dispatch=>{

        dispatch({ type:EMPLOYEE_LOADING_SVE })

        DB.saveEmployee({emp_name,emp_phone,emp_shift,emp_id})
        .then( action=>{
                dispatch(action);
                if(DB.save_employee_success){
                    Actions.main();
                }
            })
        .catch( e=>{
            dispatch({ type:EMPLOYEE_SAVE_FAILED , payload:'Network connection failed'})
        })
     })
}

export const employeeDelete = ({emp_id})=>{
    return( dispatch=>{

        dispatch({ type:EMPLOYEE_LOADING_DEL })
        
        DB.deleteEmployee({emp_id})
        .then( action=>{
                dispatch(action);
                if(DB.delete_employee_success){
                    Actions.main();
                }
            })
        .catch( e=>{
            dispatch({ type:EMPLOYEE_DELETE_FAILED , payload:'Network connection failed'})
        })
     })
}
export const employeeDelete_Q = (isShow)=>{

    return ({
        type:EMPLOYEE_ModalShow_DEL,
        payload:isShow,
    })
}

export const employeeFetch = ()=>{
    return (dispatch=>{
        DB.fetchEmployee()
        .then( action=> {
            console.log('employeeFetch >> : action>>',action);
            
            dispatch(action);
        })
    })
}