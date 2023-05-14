import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Forms.css'
function Forms() {
    const [data, setData] = useState({});
    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        console.log(data);
    {}}
    const adddata=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/hotelapi/datas',data).then((res)=>{
            console.log(res);

            const notify = () => {
                toast("wooooow");};
            console.log(notify);
            toast.success(res.data.message, {
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
        .catch((e) => {
            console.log(e)
        })

       
        

    }
    return (
        <>
            <div className='container-fluid d-flex justify-content-center mt-5 full'>
                <div className='mainregistration '>
                <form >
                    <ToastContainer/>
                    <div >
                        <label for="Name" className='test'>Name</label>
                        <input type="text" className='boxxx' name='name' onChange={change}></input>
                    </div>
                    <div >
                        <label for="Email" className='test'>Email</label>
                        <input type="email" className='boxxx' name='email' onChange={change}></input>
                    </div>
                    <div >
                        <label for="Phone" className='test'>Phone</label>
                        <input type="text" className='boxxx' name='phone' onChange={change} ></input>
                    </div>
                   
                    <div >
                        <label for="Checkin" className='test'>Check In</label>
                        <input type="text" className='boxxx' name='checkin' onChange={change} ></input>
                    </div>
                    <div >
                        <label for="Checkout" className='test'>Check Out</label>
                        <input type="text" className='boxxx' name='checkout' onChange={change} ></input>
                    </div>
        
                    <div className='vtn'>
                            <button type='submit' className='bbtn' onClick={adddata}>submit</button>
                        </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Forms