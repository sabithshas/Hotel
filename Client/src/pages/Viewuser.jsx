import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Viewuser.css'

function Viewuser() {
    
    const [data, setdata] = useState([]);
    
    console.log(data);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/hotelapi/getuser").then((rsponse) => {
            setdata(rsponse.data.data);
        })
    }, [])

    const single = (id)=>{
        console.log(id);
        navigate(`/viewusersingly/${id}`)
    }

    return (
        <>

            <div className='container-fluid-xl'>
                <h1 className='text-center mt-2'>Details Of Users</h1>
                <div className='row mt-4'>
                {data.map((i) =>
                    <div className='col-lg-4 usercontainer'>
                            <div class="card userview mt-3 ms-3" >
                                <div class="card-body">
                                    <h2 class="card-title text-center text-white">{i.name}</h2>
                                    <p class="card-text usertext">Username : {i.username}</p>
                                    <p class="card-text usertext">Email :{ i.email}</p>
                                    <p class="card-text usertext">Phone : {i.phone}</p>
                                    <p class="card-text usertext">Password : {i.password}</p>
                                    <p class="card-text usertext">Confirm Password : {i.confirmpassword}</p>
                                <div className='viewuserbutton'>
                                    <button type='submit' className='userbutton useerview' onClick={()=>{single(i.login_id)}}>View</button>
                                    {/* <button type='submit' className='userbutton useeredit'>Edit</button>
                                    <button type='submit' className='userbutton userdeleete'>Delete</button> */}
                                </div>
                                </div>
                            </div>
                        
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Viewuser