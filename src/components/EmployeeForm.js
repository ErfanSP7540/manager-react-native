import React,{Component} from 'react'
import {View , Text ,Picker}  from 'react-native'
import {Card , CardSection , Input , Button  , Spinner } from './common'

import {connect} from 'react-redux'
import {employeeUpdate} from '../reducers/actioins/EmployeeAction'


class EmployeeForm extends Component{
    render(){
        const {emp_name,emp_phone,emp_shift,emp_loading,emp_error} = this.props;
        return(
        <View>
            <CardSection>
                <Input label={'Name'} placeholder={'Jane'}
                    value={emp_name} 
                    onChangeText={(value)=>{this.props.employeeUpdate({ prop:'emp_name',value })} }
                    />
            </CardSection>

            <CardSection>
                <Input label={'Phone'} placeholder={'09186663322'} 
                    value={emp_phone}
                    onChangeText={(text)=>{this.props.employeeUpdate({ prop:'emp_phone',value:text  })} }
                    />
            </CardSection>

            <CardSection style={ {flexDirection:'row'} }>
                    <Text style={styles.shiftLabel}> Shift </Text>
                    <Picker style={{flex:1}}
                        selectedValue={emp_shift}
                        onValueChange={(itemValue, itemIndex) => this.props.employeeUpdate({prop:'emp_shift',value:itemValue})}>
                        <Picker.Item label="Sunday" value="Sunday" />
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
            </CardSection>
            <Text style={styles.errorStyle} >{emp_error}</Text>            
        </View>
        )
    }
}

const styles = {
    shiftLabel:{
        fontSize:18,
        paddingLeft:40
    },
    errorStyle:{
        fontSize:18,
        alignSelf:'center',
        color:'red'
    },
}

const mapState2Prop = (state)=>{
    
    return ({...state.employeeForm})
}
export default connect(mapState2Prop , {employeeUpdate})(EmployeeForm)
