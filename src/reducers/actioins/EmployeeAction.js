
import { EMPLOYEE_UPDATE ,
    EMPLOYEE_INSERT_SUCCESS,
    EMPLOYEE_INSERT_FAILED,
    EMPLOYEE_LOADING,
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
