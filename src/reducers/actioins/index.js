export const emailChange=(email)=>{
    console.log(email);
    
    return({
        type:'email_Changed',
        payload:email,
    })
}

export const passwordChange = (password)=>{
    return({
        type:'password_Changed',
        payload:password
    })
}