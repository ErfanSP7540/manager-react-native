import React,{Component} from 'react'
import {Text } from 'react-native'
import {CardSection} from './common'


export default class extends Component{
    
    
    render(){
        const {employee} = this.props;

        return(
            <CardSection>
                <Text style={this.style.title}>{employee.name}</Text>
            </CardSection> 
        )
    }
    
    style = {
        title:{
            fontSize:18,
            paddingLeft:15,
        },
    }
}




