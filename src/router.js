import React from 'react'
import LoginForm from './components/LoginForm'

import {Router,Scene,Stack} from 'react-native-router-flux'


const RouterComponent=()=>{
    
    return(
        <Router>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Please Login"/>
            </Stack>
        </Router>
    )

}

export default RouterComponent