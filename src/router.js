import React from 'react'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

import {Router,Scene,Stack} from 'react-native-router-flux'


const RouterComponent=()=>{
    
    return(
        <Router >
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Please Login" initial/>
                <Scene key="EmployeeList" component={EmployeeList} title="Employees"  />
            </Stack>
        </Router>
    )
}

export default RouterComponent