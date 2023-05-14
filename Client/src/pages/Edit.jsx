import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Edit.css'

function Edit() {
    const navigate=useNavigate()
    const [userdata, setuserdata] = useState({})
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/hotelapi/singleuser/${id}`).then((response) => {
            console.log(response);

            setuserdata(response.data)
        })
    }, [])
    console.log(userdata)

    const change = (e) => {
        const { name, value } = e.target
        setuserdata({ ...userdata, [name]: value })

    }
    const edituser = (e) => {
        e.preventDefault()
        axios.put(`http://127.0.0.1:8000/hotelapi/updateuser/${id}`, userdata).then((resp) => {
            console.log(resp);

            if (resp.data.success===1) {
                navigate(`/viewusersingly/${id}`)
            }

            const notify = () => {
                toast("wooooow");};
            console.log(notify);
            toast.success(resp.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            

        })
        
    }
    
    
    return (
        <>
            <div className='container-fluid userregistration'>
            
                <div className='userform'>
                    
                <ToastContainer/>
                
                    <forms>
                        <div >
                            <label for="name" className='userlabel'>Name</label>
                            <input type="text" className='userinput' value={userdata.name || ""} name='name' onChange={change}  ></input>
                        </div>
                        <div >
                            <label for="email" className='userlabel' >Username</label>
                            <input type="text" className='userinput' value={userdata.username || ""} name='username' onChange={change} ></input>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Email</label>
                            <input type="text" className='userinput' value={userdata.email || ""} name='email' onChange={change} ></input>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Phone</label>
                            <input type="text" className='userinput' value={userdata.phone || ""} name='phone' onChange={change} ></input>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Password</label>
                            <input type="text" className='userinput' value={userdata.password || ""} name='password' onChange={change}></input>
                        </div>
                        <div >
                            <label for="phone" className='userlabel' >Confirm Password</label>
                            <input type="text" className='userinput' value={userdata.confirmpassword || ""} name='confirmpassword' onChange={change} ></input>
                        </div>

                        <div className='userbtndiv'>
                            <button type='submit' className='userbtn' onClick={edituser}>submit</button>
                            
                        </div>
                    </forms>
                </div>
            </div>
        </>
    )
}

export default Edit