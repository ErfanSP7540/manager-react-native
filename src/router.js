import React from 'react'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

import {Router,Scene,Stack} from 'react-native-router-flux'


const RouterComponent=()=>{
    
    return(
        <Router >
            <Stack key="root">
                <Scene key="auth"  hideNavBar={true} initial>
                    <Scene key="login" component={LoginForm} title="Please Login" hideNavBar={false}/> 
                </Scene>

                <Scene key="main"  hideNavBar={true}>
                    <Scene key="EmployeeList" component={EmployeeList} title="Employees" hideNavBar={false} 
                         rightTitle={'plus'} onRight={()=>console.log('plus')}/> 
                </Scene>    
            </Stack>
        </Router>
    )
}

export default RouterComponent