import React,{Component} from 'react'
import {ListView } from 'react-native'
import ListItem from './ListItem'

import {connect} from 'react-redux'
import { employeeFetch } from '../reducers/actioins/EmployeeAction'

class EmployeeList extends Component{
    
    componentWillMount(){
        this.props.employeeFetch();
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProp){
        this.createDataSource(nextProp)
    }
    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!=r2
        })
        this.DataSource = ds.cloneWithRows(employees)
    }
    renderRow(employee){
        return <ListItem employee={employee} />
    }

    render(){

        console.log(  'EmployeeList >> (props):' ,   this.props.employees);
         
        return (

            <ListView
                enableEmptySections
                dataSource={this.DataSource}
                renderRow={this.renderRow}
            />
        )}
}

const mapState2Prop=(state)=>{
    return {...state.employeeList}
}

export default connect(mapState2Prop,{ employeeFetch })(EmployeeList) 