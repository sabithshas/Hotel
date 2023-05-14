import React, { useState } from 'react'
import './Userregistration.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Userregistaration() {

    const navigate = useNavigate()
    const [data, setData] = useState({});
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    console.log(data);

    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const validate = (values) => {
        var error = {}
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
        var phne=/^\+?[1-9][0-9]{7,14}$/
        if (!values.name) {
            error.name = "name required! "
        }
        if (!values.username) {
            error.username = "username required! "
        }
        if (!values.email) {
            error.email = "email is required"
        }
        
        if(!phne.test(values.phone)){
            error.phone = " 10 numbers required"
        }
        else if (!values.phone) {
            error.phone = "number is required "
        }
        if (!reg.test(values.password)) {
            error.password = "one uppersace and one symbol required"
        } 
        else if (!values.password) {
            error.password = " password required"
        }
        if(!values.confirmpassword){
            error.confirmpassword = "confirm password required"
        }
        else if(values.password && values.confirmpassword !==values.password)
        error.confirmpassword = " password doesnot match"
        console.log(error);

        return error
    }

    const dataadd = (e) => {
        e.preventDefault()
        setFormError(validate(data))
        setIsSubmit(true)
        if (Object.keys(formError).length === 0 && isSubmit) {
            axios.post('http://127.0.0.1:8000/hotelapi/userregister', data).then((res) => {
                console.log(res);
            }).catch((e) => {
                console.log(e)
            })
        }

    }



    return (
        <>
            <div className='container-fluid userregistration'>
                <div className='userform'>
                    <forms>
                        <div >
                            <label for="name" className='userlabel' >Name</label>
                            <input type="text" style={{ borderColor: formError.name ? "red" : "" }} className='userinput' onClick={() => { setFormError({ ...formError, name: "" }) }} name='name' onChange={change} ></input>
                            {/* <span style={{color:"red"}}>{formError.name}</span> */}
                        </div>
                        <div >
                            <label for="email" className='userlabel' >Username</label>
                            <input type="text" className='userinput' onClick={() => { setFormError({ ...formError, username: "" }) }} name='username' onChange={change} ></input>
                            <span style={{ color: "red" }}>{formError.username}</span>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Email</label>
                            <input type="text" style={{ background: formError.email ? "red" : "" }} className='userinput' name='email' onClick={() => setFormError({ ...formError, email: "" })} onChange={change}></input>
                            <span style={{ color: "red" }}>{formError.email}</span>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Phone</label>
                            <input type="text" className='userinput' onClick={() => { setFormError({ ...formError, phone: "" }) }} name='phone' onChange={change}></input>
                            <span style={{ color: "red" }}>{formError.phone}</span>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Password</label>
                            <input type="text" className='userinput' name='password' onClick={() => { setFormError({ ...formError, password: "" }) }} onChange={change}></input>
                            <span style={{ color: "red" }}>{formError.password}</span>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Confirm Password</label>
                            <input type="text" className='userinput'onClick={() => { setFormError({ ...formError, confirmpassword: "" }) }} name='confirmpassword' onChange={change}></input>
                            <span style={{ color: "red" }}>{formError.confirmpassword}</span>
                        </div>

                        <div className='userbtndiv'>
                            <button type='submit' className='userbtn' onClick={dataadd} >submit</button>
                        </div>
                    </forms>
                </div>
            </div>
        </>
    )
}

export default Userregistaration