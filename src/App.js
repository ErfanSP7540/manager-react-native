import React,{Component} from 'react'
import {Text , View } from 'react-native'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import LoginForm from './components/LoginForm'

class App extends Component{
    render(){
        return (
            <Provider store={ createStore(()=>[]) }>

               <LoginForm /> 
            
            </Provider>
        )
    }
}

export default App;