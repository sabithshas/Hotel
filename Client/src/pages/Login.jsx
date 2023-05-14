import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import './Login.css'
function Login() {
    const[data,setdata]=useState({})

    const navigate = useNavigate()
    const [logerror, setlogerror] = useState({});
    const [submiterror, setsubmiterror] = useState(false);
    const same = (e) =>{
        const {name,value} = e.target
        setdata({ ...data, [name]: value })
    }
    console.log(data)
    const check = (values) =>{
        var error={}

        if (!values.username) {
            error.username = "username required! "
        }
        if (!values.password) {
            error.password = "password required! "
        }
        
        return error;
        console.log(error);
    }
    const loginin = (e) => {
        console.log('hhhhhh',data);
        e.preventDefault()
        setlogerror(check(data))
        setsubmiterror(true)
        if (Object.keys(logerror).length === 0 && submiterror){
            axios.post('http://127.0.0.1:8000/hotelapi/login',data,{headers:{'Content-Type':'application/json'}}).then((response)=>{
                console.log(response)
                 localStorage.setItem("userdetails",JSON.stringify(response.data))
                console.log(response.data)
                // navigate('/home')
                if (response.data.data.role === 'admin'){
                    navigate('/adminhome') 
                } else{
                    navigate('/home')
                } 
            })
        }
        
    }
    return (

        <>
        <Nav/>
            <div className='container-fluid loginreg '>
                <div className=' firstone'>
                    <img src='./assets/login image.avif' ></img>
                </div>
                <div className=' second'>
                    {/* <div className='loginreg'> */}
                    {/* <h2 className='headinglog'>Login</h2> */}
                    <forms>
                        <div >
                            <label for="username" className='loglab' >Username</label>
                            <input type="text" className='loginipt' name='username' onClick={()=>{setlogerror({...logerror,username: ""})}} onChange={same} ></input>
                            <span style={{ color: "red" }}>{logerror?.username}</span>
                        </div>

                        <div >
                            <label for="password" className='loglab' >Password</label>
                            <input type="text" className='loginipt' name='password'onClick={()=>{setlogerror({...logerror,password: ""})}} onChange={same}></input>
                            <span style={{ color: "red" }}>{logerror?.password}</span>
                        </div>
                        <div className='loginbutton'>
                            <button type='submit' onClick={loginin}>login</button>
                        </div>
                    </forms>
                    {/* </div> */}
                </div>

            </div>
        </>
    )
}

export default Login