import {combineReducers} from 'redux'

import userReducer from './userReducer'
import employeeFormReducer from './employeeFormReducer'
import employeeListReducer from './employeeListReducer'


export default combineReducers({
    user:userReducer,
    employeeForm:employeeFormReducer,
    employeeList:employeeListReducer,
})