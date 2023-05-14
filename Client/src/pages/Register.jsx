import React from 'react'
import './Register.css'
function Register() {
    return (
        <>
            <div className='container-fluid max'>
                <div className='registration'>
                    <div className='fill'>
                <forms>
                    <div >
                        <label for="name" className='labels' >Name</label>
                        <input type="text" className='tests' ></input>
                    </div>
                    <div >
                        <label for="email" className='labels' >Email</label>
                        <input type="text" className='tests' ></input>
                    </div>
                    <div >
                        <label for="phone" className='labels' >Phone</label>
                        <input type="text" className='tests'></input>
                    </div>
                    <div >
                        <label for="username" className='labels'>Username</label>
                        <input type="text" className='tests' ></input>
                    </div>
                    <div >
                        <label for="password" className='labels' >Password</label>
                        <input type="text" className='tests' ></input>
                    </div>
                    <div >
                        <label for="confirmpassword" className='labels' >Confirm Password</label>
                        <input type="text" className='tests' ></input>
                    </div>
                    <div className='regbbtn'>
                            <button className='regbtn' >submit</button>
                        </div>
                </forms>
                </div>
                </div>
            </div>
        </>
    )
}

export default Register