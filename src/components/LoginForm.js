import React,{Component} from 'react'
import {Text ,View} from 'react-native'
import { Card, CardSection , Input , Button , Spinner } from './common'

import {connect} from 'react-redux'

class LoginForm extends Component{

    onEmailChange(email){
        this.props.emailChange(email)
    }

    onPasswordChange(password){
        this.props.passwordChange(password)
    }  
    
    ButtonRender(loading , email , password ){
        if(loading){
            return <Spinner size="large"/>
        }else{
            return (
                <Button 
                    onPress ={()=> this.props.loginUser({email,password}) }
                >
                    Log In
                </Button>
            )
        }
    }

    render(){

        const {email,password , error , loading , user } = this.props.user;
        return(
            <Card>
                <CardSection>
                    <Input  
                        placeholder={'user@gmail.com'}
                        label={'Email'}
                        value={email}
                        onChangeText={ (text) =>{ this.props.emailChange(text) }}
                    />
                </CardSection>

                <CardSection >
                    <Input  
                        secureTextEntry = {true}
                        placeholder={'password'}
                        label={'password'}
                        value={password}
                        onChangeText={ password =>{ this.props.passwordChange(password) }}
                        />
                </CardSection>
                <Text style={styles.errorStyle}>{error}</Text>
                <CardSection>
                    {this.ButtonRender(loading , email , password)}
                </CardSection>
            </Card>
        )
    }
}

const styles={
    errorStyle:{
        fontSize:18,
        alignSelf:'center',
        color:'red'
    },
}

const mapState2pro=( state , ownProp )=>{
    
    const {email , password , loading , error , user } = state
    return ({email , password , loading , error , user })
}

import {emailChange , passwordChange ,loginUser} from '../reducers/actioins/AuthAction'
const mapAction2prop=()=>{
    return ({emailChange , passwordChange , loginUser })
}
export default connect(mapState2pro,mapAction2prop())(LoginForm)