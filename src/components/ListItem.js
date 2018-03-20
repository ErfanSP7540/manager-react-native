import React,{Component} from 'react'
import { Text , View , TouchableWithoutFeedback } from 'react-native'
import {CardSection} from './common'
import {Actions} from 'react-native-router-flux'


export default class extends Component{
    
    onRowPress(){
        console.log('onPressRow');
        Actions.EmployeeCreate({employee:this.props.employee});
    }
    render(){
        const {employee} = this.props;

        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={this.style.title}>{employee.name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback> 
        )
    }
    
    style = {
        title:{
            fontSize:18,
            paddingLeft:15,
        },
    }
}




