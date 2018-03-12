import React,{Component} from 'react'
import {Text,View} from 'react-native'

import {connect} from 'react-redux'
import {employeeUpdate} from '../reducers/actioins/EmployeeAction'


import { Card , CardSection , Input , Button } from './common'



class EmployeeCreate extends Component{
    
    render(){
        console.log('>>>',this.props);
        
        return(
            <Card>
                <CardSection>
                    <Input label={'Name'} placeholder={'Jane'}
                        value={this.props.name} 
                        onChangeText={(value)=>{this.props.employeeUpdate({ prop:'name',value })} }
                        />
                </CardSection>

                <CardSection>
                    <Input label={'Phone'} placeholder={'09186663322'} 
                        value={this.props.phone}
                        onChangeText={(text)=>{this.props.employeeUpdate({ prop:'phone',value:text  })} }
                        />
                </CardSection>

                <CardSection>
                    <Button >Save</Button>
                </CardSection>
            </Card>
        )
    }
}
const mapState2Prop = (state)=>{
    
    return ({...state.empoyeeForm})
}

export default connect(mapState2Prop,{employeeUpdate})(EmployeeCreate)