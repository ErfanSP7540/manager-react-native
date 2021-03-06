import React from 'react'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

import {Router,Scene,Stack,Actions} from 'react-native-router-flux'


const RouterComponent=()=>{
    
    return(
        <Router >
            <Stack key="root">
                <Scene key="auth"  hideNavBar={true} initial>
                    <Scene key="login" component={LoginForm} title="Please Login" hideNavBar={false}/> 
                </Scene>

                <Scene key="main"  hideNavBar={true}>
                    <Scene key="EmployeeList" component={EmployeeList} title="Employees" hideNavBar={false} 
                         rightTitle={'plus'} onRight={()=>Actions.EmployeeCreate()}
                         initial /> 
                    <Scene key="EmployeeCreate" component={EmployeeCreate} title="EmployeeCreate"  hideNavBar={false}
                        /> 
                    <Scene key="EmployeeEdit" component={EmployeeEdit} title="EmployeeEdit"  hideNavBar={false}
                        /> 
                </Scene>    
            </Stack>
        </Router>
    )
}

export default RouterComponent