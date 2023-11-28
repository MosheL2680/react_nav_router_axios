import axios from 'axios'
import React, { useState } from 'react'

const Login = (props) => {
    const [userName, setuserName] = useState("")
    const [pwd, setpwd] = useState("")
    const LOGIN_SERVER = 'https://super-django-1.onrender.com/login/'

    const login = () => {
        axios.post(LOGIN_SERVER, {username:userName, password: pwd})
        .then((res)=>{
            const token = res.data.access
            sessionStorage.setItem('token', token)
            props.setLogged(true)
        })
    }
    if (props.logged) return <div><button>
        5
        
        
        
        
        LogOut (not ready)</button>   </div>
    return (
        <div>Login<br />

            u name<input type='text' onChange={(e)=>setuserName(e.target.value)}></input>
            pass<input type='password' onChange={(e)=>setpwd(e.target.value)}></input>
            <button onClick={login}>login</button>


        </div>
    )
}

export default Login