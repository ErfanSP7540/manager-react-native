import {combineReducers} from 'redux'
import userReducer from './userReducer'
import employeeFormReducer from './employeeFormReducer'
export default combineReducers({
    user:userReducer,
    employeeForm:employeeFormReducer
})