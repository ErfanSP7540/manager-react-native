import { CHANGED_EMAIL , CHANGED_PASSWORD } from './types'

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