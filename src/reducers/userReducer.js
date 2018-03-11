export default (state, action)=>{
    console.log(action);
    
    switch (action.type) {
        case 'email_Changed':
            return {user:state.user,email:action.payload}
        case 'password_Changed':
            return {...state,password:action.payload}
        default:
            return {email:'',password:''}
    }
}