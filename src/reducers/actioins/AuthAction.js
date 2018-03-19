import {Actions} from 'react-native-router-flux'
import DB from '../../dataBase'


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



export const loginUser = ({email,password})=>{
    return( dispatch=>{

    dispatch({ type:LOGIN })
    
    DB.login({email,password})
    .then( action=>{
        console.log('then >> AuthAction');

            console.log('start');
            dispatch(action);
            
            if( DB.currentUser.id )
            {
                Actions.main();
                console.log('end');
            }
        })
    .catch( e=>{
        console.log('catch >> AuthAction');
        dispatch({ type:LOGIN_FAIL , payload:'Network connection failed'})
    })
    })
}


const loginSuccess =(dispatch)=>{
    dispatch({ type:LOGIN_SUCCESS });
    
}
