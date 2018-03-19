import {
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILED,
            } from './actioins/types'

const INIT_STATE = { 
    employees:[]
 }            

 export default (state=INIT_STATE , action )=>{
     console.log('employeeListReducer :: action >> ', action  );
     
     switch (action.type) {
        case FETCH_EMPLOYEE_SUCCESS:
            return {employees:action.payload};

        case FETCH_EMPLOYEE_FAILED:
            return state

         default:
            return state
     }
 }