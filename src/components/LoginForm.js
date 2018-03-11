import React,{Component} from 'react'
import { Card, CardSection , Input , Button } from './common'

class LoginForm extends Component{
    render(){
        return(
            <Card>
                <CardSection>
                    <Input  
                        placeholder={'user@gmail.com'}
                        label={'Email'}
                        //value={this.state.email}
                        //onChangeText={email=>this.setState({email})}
                    />
                </CardSection>

                <CardSection >
                    <Input  
                            secureTextEntry = {true}
                            placeholder={'password'}
                            label={'password'}
                            //value={this.state.password}
                            //onChangeText={password=>this.setState({password})}
                        />
                </CardSection>
                <CardSection> 
                  <Button>Log In</Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm