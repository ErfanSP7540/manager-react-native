import React,{Component} from 'react'
import { Card, CardSection , Input , Button } from './common'

import {connect} from 'react-redux'

class LoginForm extends Component{

    onEmailChange(email){
        this.props.emailChange(email)
    }

    onPasswordChange(password){
        this.props.passwordChange(password)
    }    

    render(){

        console.log(this.props);
        
        return(
            <Card>
                <CardSection>
                    <Input  
                        placeholder={'user@gmail.com'}
                        label={'Email'}
                        value={this.props.user.email}
                        onChangeText={ (text) =>{ this.props.emailChange(text) }}
                    />
                </CardSection>

                <CardSection >
                    <Input  
                        secureTextEntry = {true}
                        placeholder={'password'}
                        label={'password'}
                        value={this.props.user.password}
                        onChangeText={ password =>{ this.props.passwordChange(password) }}
                        />
                </CardSection>
                <CardSection> 
                  <Button>Log In</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapState2pro=( state , ownProp )=>{
    return ({ user:state.user})
}

import {emailChange , passwordChange } from '../reducers/actioins'
const mapAction2prop=()=>{
    return ({emailChange , passwordChange })
}
export default connect(mapState2pro,mapAction2prop())(LoginForm)