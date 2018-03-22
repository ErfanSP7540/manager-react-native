import React,{Component} from 'react'
import {Text,Picker,View} from 'react-native'

import {connect} from 'react-redux'
import {employeeUpdate,employeeInsert} from '../reducers/actioins/EmployeeAction'


import { Card , CardSection , Input , Button  , Spinner} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component{

    ButtonRender( {emp_name,emp_phone,emp_shift,emp_loading} ){
        if(emp_loading){
            return <Spinner size="large"/>
        }else{
            return (
                <Button 
                    onPress ={()=> {this.props.employeeInsert({emp_name,emp_phone,emp_shift}) }}
                >
                    Insert
                </Button>
            )
        }
    }

    render(){
        const {emp_name,emp_phone,emp_shift,emp_loading,emp_error} = this.props;
        
        console.log('EmployeeCreate.js >>>',this.props.employee);
        console.log('state : ' ,{emp_name,emp_phone,emp_shift,emp_loading,emp_error} )
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    {this.ButtonRender({emp_name,emp_phone,emp_shift,emp_loading})}
                </CardSection>
            </Card>
        )
    }
}



const mapState2Prop = (state)=>{

    return ({...state.employeeForm})
}

export default connect(mapState2Prop,{employeeInsert})(EmployeeCreate)