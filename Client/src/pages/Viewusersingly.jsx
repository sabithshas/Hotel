import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Viewusersingly.css'


function Viewusersingly() {
    let [singleData,setSingleData]=useState()

    const {id} = useParams()
    console.log(id);
   
useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/hotelapi/singleuser/${id}`).then((response)=>{
        setSingleData(response.data)
    })
},[])



console.log('daataaaaa',singleData);

const out =(id)=>{
    console.log(out);
    axios.delete(`http://127.0.0.1:8000/hotelapi/deleteuser/${id}`).then((response)=>{
        setSingleData(response.data)
    })
}
const navigate=useNavigate()
const edit=(id)=>{
        console.log(id);
        navigate(`/edit/${id}`)
    }



    return (
        <>
            <div className='container-fluid-xl'>
                <h1 className='text-center mt-5 singleuserhead'>DETAILS OF {singleData ? singleData.name : ''}</h1>
                    <div className='singleusercontainer mt-5'>
                        <div class="card singlecard">
                            <div class="card-body">
                                <p class="card-text singletext">Useername : {singleData ? singleData.username : ''}</p>
                                <p class="card-text singletext">Email : {singleData ? singleData.email : ''}</p>
                                <p class="card-text singletext">Phone : {singleData ? singleData.phone : ''}</p>
                                <p class="card-text singletext">password : {singleData ? singleData.password : ''}</p>
                                <p class="card-text singletext">Confirmpassword : {singleData ? singleData.confirmpassword : ''}</p>
                                <div className='singleviewbuttons'>
                                <button type='submit' className='buttonuser'onClick={()=>{edit(singleData.login_id)}}>Edit</button>
                                <button type='submit'className='buttonuser' onClick={()=>{out(singleData.login_id)}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Viewusersingly