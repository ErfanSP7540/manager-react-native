import React,{Component} from 'react'
import {Text,Picker,View} from 'react-native'

import {connect} from 'react-redux'
import {employeeUpdate,employeeInsert} from '../reducers/actioins/EmployeeAction'


import { Card , CardSection , Input , Button  , Spinner} from './common'


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
       //console.log('>>>',this.props);

        const {emp_name,emp_phone,emp_shift,emp_loading,emp_error} = this.props;

        return(
            <Card>
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
                <CardSection>
                    {this.ButtonRender({emp_name,emp_phone,emp_shift,emp_loading})}
                </CardSection>
            </Card>
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
    //console.log('state:',state);
    
    return ({...state.employeeForm})
}

export default connect(mapState2Prop,{employeeUpdate,employeeInsert})(EmployeeCreate)