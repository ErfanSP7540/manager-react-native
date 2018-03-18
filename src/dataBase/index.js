import axios from 'axios'
import {LOGIN_FAIL,
        LOGIN_SUCCESS,
        EMPLOYEE_UPDATE ,
        EMPLOYEE_INSERT_SUCCESS,
        EMPLOYEE_INSERT_FAILED,  } from '../reducers/actioins/types'


const DB = {};
DB.currentUser = { id : null }; 

DB.login =( {email , password} )=>{
 
    const LOGIN_SUCCESS_A  = { type:LOGIN_SUCCESS }
    const LOGIN_FAILED=(e)=> ({ type:LOGIN_FAIL , payload:e})

    return axios(
            { method: 'POST', url: 'http://localhost:3000/login',
            headers: { email, password},
            data: { user: 'name' }
            })
            .then(  r=>{
                //  r.status ==== 200
                DB.currentUser.id = r.data.userid;
                return new Promise( (res,rej)=>{  res(LOGIN_SUCCESS_A)  })
        })
        .catch( (e,r)=> {
                //  r.status ==== 400
                return new Promise( (res,rej)=>{  res(LOGIN_FAILED(e.response.data.error))  })}  )
}

// const {name,phone,shift,userid} = req.headers;
DB.insert_employee_success = false;
DB.insertEmployee = ({emp_name,emp_phone,emp_shift})=>{
    DB.insert_employee_success = false;
    const INSERT_SUCCESS = { type:EMPLOYEE_INSERT_SUCCESS }
    const INSERT_FAILED  =(e)=> ({ type:EMPLOYEE_INSERT_FAILED , payload:e}) 

    return axios(
        {   method: 'POST', url: 'http://localhost:3000/inserEmployee',
            headers: { name:emp_name , phone:emp_phone , shift:emp_shift ,userid:DB.currentUser.id  },
            /*   name,phone,shift,userid   */
            data: { user: 'name' }
        })
        .then(  r=>{
            //  r.status ==== 200
            DB.insert_employee_success = true;
            return new Promise( (res,rej)=>{  res(INSERT_SUCCESS)  })
    })
    .catch( (e,r)=> {
        //  r.status ==== 400
        return new Promise( (res,rej)=>{  res(INSERT_FAILED(e.response.data.error))  })}  )

}

export default DB




