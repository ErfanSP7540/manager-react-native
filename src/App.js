import React,{Component} from 'react'
import {Text , View } from 'react-native'

import {createStore} from 'redux'
import {Provider} from 'react-redux'


class App extends Component{
    render(){
        return (
            <Provider store={ createStore(()=>[]) }>
                <View>
                    <Text> Hello World !!! </Text>
                </View>
            </Provider>
        )
    }
}

export default App;