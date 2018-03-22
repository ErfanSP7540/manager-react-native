import React,{Component} from 'react'
import {Text,Picker,View} from 'react-native'

import {connect} from 'react-redux'
import {employeeUpdate,employeeSave,employeeDelete,employeeDelete_Q} from '../reducers/actioins/EmployeeAction'


import { Card , CardSection , Input , Button  , Spinner, Confirm} from './common'
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component{

    componentWillMount(){
        console.log('componentWillMount');
        
        this.props.employeeUpdate({prop:'emp_name',value:this.props.employee.name})
        this.props.employeeUpdate({prop:'emp_shift',value:this.props.employee.shift})
        this.props.employeeUpdate({prop:'emp_phone',value:this.props.employee.phone})

    }

    ButtonSaveRender( {emp_name,emp_phone,emp_shift,emp_loading_sve,emp_error_sve} ){
        if(emp_loading_sve){
            return <Spinner size="large"/>
        }else{
            const emp_id = this.props.employee._id
            return (
                <CardSection>
                    
                    <Button 
                        onPress ={()=> {this.props.employeeSave({emp_name,emp_phone,emp_shift,emp_id}) }}
                    >
                        Save Changes
                    </Button>
                </CardSection>
            )
        }
    }

    ButtonDeleteRender({emp_loading_sve}){
        if(!emp_loading_sve){
            const emp_id = this.props.employee._id
            return (
                <CardSection>
                    <Button 
                        onPress ={()=> {this.props.employeeDelete_Q(true) }}
                    >
                        Delete
                    </Button>
                </CardSection>
            )
        }       
    }

    render(){
        const {emp_name,emp_phone,emp_shift     } = this.props;
        const {emp_loading_sve, emp_loading_del } =  this.props;
        const {emp_error_del  , emp_error_sve ,emp_modalShow_del  } = this.props;

        console.log('EmployeeEdit.js >>>',this.props.employee);
        console.log('state : ' ,{emp_name,emp_phone,emp_shift , emp_loading_sve, emp_loading_del,emp_error_del  , emp_error_sve } )
        return(
            <Card>
                <EmployeeForm />
                    <Text style={style.errorStyle}>{emp_error_sve}</Text>
                    {this.ButtonSaveRender({emp_name,emp_phone,emp_shift,emp_loading_sve,emp_error_sve})}
                    {this.ButtonDeleteRender({emp_loading_sve})}
                    <Confirm 
                        visible={emp_modalShow_del} 
                        onAccept={ this.onAccept.bind(this) }
                        onDeny={this.onDeny.bind(this)} 
                        emp_error_del = {emp_error_del}
                        >
                        ARE YOU SURE ?
                    </Confirm>
            </Card>
        )
    }

    onAccept(){
       const emp_id = this.props.employee._id
       this.props.employeeDelete({emp_id}) 
    }
    onDeny(){
        this.props.employeeDelete_Q(false) 
     }
}



const style={
    errorStyle:{
        fontSize:18,
        alignSelf:'center',
        color:'red',
    },

}

const mapState2Prop = (state)=>{
    console.log('EmployeeEdit >> mapSate2prop >> state::', state );
    
    return ({...state.employeeForm })
}
export default connect(mapState2Prop,{employeeUpdate, employeeSave,employeeDelete_Q,employeeDelete})(EmployeeCreate)