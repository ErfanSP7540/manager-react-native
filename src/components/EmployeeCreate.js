import React,{Component} from 'react'
import {Text,Picker,View} from 'react-native'

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

                <CardSection style={ {flexDirection:'row'} }>
                        <Text style={styles.shiftLabel}> Shift </Text>
                        <Picker style={{flex:1}}
                            selectedValue={this.props.shift}
                            onValueChange={(itemValue, itemIndex) => this.props.employeeUpdate({prop:'shift',value:itemValue})}>
                            <Picker.Item label="Sunday" value="Sunday" />
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                        </Picker>
                </CardSection>
                <CardSection>
                    <Button >Save</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    shiftLabel:{
        fontSize:18,
        paddingLeft:40
    }
}

const mapState2Prop = (state)=>{
    
    return ({...state.empoyeeForm})
}

export default connect(mapState2Prop,{employeeUpdate})(EmployeeCreate)