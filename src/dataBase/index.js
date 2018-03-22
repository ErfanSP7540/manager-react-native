import axios from 'axios'
import {LOGIN_FAIL,
        LOGIN_SUCCESS,
        EMPLOYEE_UPDATE ,
        EMPLOYEE_INSERT_SUCCESS,
        EMPLOYEE_INSERT_FAILED,
        FETCH_EMPLOYEE_SUCCESS,
        FETCH_EMPLOYEE_FAILED,
        EMPLOYEE_SAVE_SUCCESS,
        EMPLOYEE_SAVE_FAILED,
        EMPLOYEE_DELETE_SUCCESS,
        EMPLOYEE_DELETE_FAILED, 
      } from '../reducers/actioins/types'


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
DB.save_employee_success = false;
DB.saveEmployee = ({emp_name,emp_phone,emp_shift,emp_id})=>{
    DB.insert_employee_success = false;
    const SAVE_SUCCESS = { type:EMPLOYEE_SAVE_SUCCESS }
    const SAVE_FAILED  =(e)=> ({ type:EMPLOYEE_SAVE_FAILED , payload:e}) 

    return axios(
        {   method: 'POST', url: 'http://localhost:3000/updateEmployee',
            headers: { name:emp_name , phone:emp_phone , shift:emp_shift ,employeeid:emp_id  ,userid:DB.currentUser.id  },
            /*   name,phone,shift,userid   */
            data: { user: 'name' }
        })
        .then(  r=>{
            //  r.status ==== 200
            DB.save_employee_success = true;
            return new Promise( (res,rej)=>{  res(SAVE_SUCCESS)  })
    })
    .catch( (e,r)=> {
        //  r.status ==== 400
        return new Promise( (res,rej)=>{  res(SAVE_FAILED(e.response.data.error))  })}  )

}

DB.delete_employee_success = false;
DB.deleteEmployee = ({emp_id})=>{
    DB.delete_employee_success = false;
    const DELETE_SUCCESS = { type:EMPLOYEE_DELETE_SUCCESS }
    const DELETE_FAILED  =(e)=> ({ type:EMPLOYEE_DELETE_FAILED , payload:e}) 

    return axios(
        {   method: 'POST', url: 'http://localhost:3000/deleteEmployee',
            headers: {employeeid:emp_id  ,userid:DB.currentUser.id  },
            /*   name,phone,shift,userid   */
            data: { user: 'name' }
        })
        .then(  r=>{
            //  r.status ==== 200
            DB.delete_employee_success = true;
            return new Promise( (res,rej)=>{  res(DELETE_SUCCESS)  })
    })
    .catch( (e,r)=> {
        //  r.status ==== 400
        return new Promise( (res,rej)=>{  res(DELETE_FAILED(e.response.data.error))  })}  )

}


DB.fetchEmployee = ()=>{

    const FETCH_SUCCESS = employees => ({ type:FETCH_EMPLOYEE_SUCCESS , payload:employees })
    const FETCH_FAILED  = e         => ({ type:FETCH_EMPLOYEE_FAILED , payload:e}) 

    return axios(
        {   method: 'POST', url: 'http://localhost:3000/fetchemployees',
            headers: { userid:DB.currentUser.id  },
            /*   name,phone,shift,userid   */
            data: { user: 'name' }
        })
        .then(  r=>{
            //  r.status ==== 200
            console.log('DB >>', r );
            
            return new Promise( (res,rej)=>{  res(FETCH_SUCCESS(r.data.employees))  })
    })
    .catch( (e,r)=> {
        //  r.status ==== 400
        return new Promise( (res,rej)=>{  res(FETCH_FAILED(e.response.data.error))  })}  )
}

export default DB




