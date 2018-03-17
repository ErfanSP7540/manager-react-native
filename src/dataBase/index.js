import axios from 'axios'
import {LOGIN_FAIL , LOGIN_SUCCESS } from '../reducers/actioins/types'


const DB = {};
DB.currentUser = { id : null }; 

DB.login =( {email , password} )=>{
 
    const LOGIN_SECCESS  = { type:LOGIN_SUCCESS }
    const LOGIN_FAILED=(e)=> ({ type:LOGIN_FAIL , payload:e})

    return axios(
            { method: 'POST', url: 'http://localhost:3000/login',
            headers: { email, password},
            data: { user: 'name' }
            })
            .then(  r=>{
                //  r.status ==== 200
                DB.currentUser.id = r.data.userid;
                return new Promise( (res,rej)=>{  res(LOGIN_SECCESS)  })
        })
        .catch( (e,r)=> {
            //  r.status ==== 400
            return new Promise( (res,rej)=>{  res(LOGIN_FAILED(e.response.data.error))  })}  )
}

export default DB




