import React,{Component} from 'react'
import {Text , View } from 'react-native'

import {connect} from 'react-redux'
import { employeeFetch } from '../reducers/actioins/EmployeeAction'

class EmployeeList extends Component{
    
    componentWillMount(){
        console.log('fetch');
        this.props.employeeFetch();
    }
    render(){

        console.log(  'EmployeeList >> (props):' ,   this.props.employees);
         
        return (

            <View>
                <Text>Employeee List</Text>
                <Text>{ this.props.employees.length   }</Text>
                <Text>{ JSON.stringify(this.props.employees[0]) }</Text>
                <Text>Employeee List</Text>
            </View>
        )}
}

const mapState2Prop=(state)=>{
    return {...state.employeeList}
}

export default connect(mapState2Prop,{ employeeFetch })(EmployeeList) 