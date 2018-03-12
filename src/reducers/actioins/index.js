import { CHANGED_EMAIL,
         CHANGED_PASSWORD,
         LOGIN,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
         } from './types'

export const emailChange=(email)=>{
    return({
        type:CHANGED_EMAIL,
        payload:email,
    })
}

export const passwordChange = (password)=>{
    return({
        type:CHANGED_PASSWORD,
        payload:password
    })
}


import axios from 'axios'
export const loginUser = ({email,password})=>{
    return( dispatch=>{

        dispatch({ type:LOGIN })

        axios(
            { method: 'POST',
              url: 'http://localhost:3000/',
              headers: {autorizacion: 'werwerwerwerwer',
                        email,
                        password,
                    },
              data: { user: 'name' } 
            })
        .then(  r=>{
            console.log(r);
            
                    if(r.data.error){
                        dispatch({type:LOGIN_FAIL , payload:'Incorrect Email Or Pass'})
                    }else{
                        loginSuccess(dispatch)
                    }
        })
        .catch( e=> {  dispatch({type:LOGIN_FAIL , payload:'NetWork Connection Failed'})})
    })
}


import {Actions} from 'react-native-router-flux'
const loginSuccess =(dispatch)=>{
    dispatch({ type:LOGIN_SUCCESS });
    Actions.main();
}

