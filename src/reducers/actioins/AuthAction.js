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
        dispatch(action);
        if( DB.currentUser.id )
        {
            Actions.main();
        }
    })
})
}


const loginSuccess =(dispatch)=>{
    dispatch({ type:LOGIN_SUCCESS });
    
}
