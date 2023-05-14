import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Rooms.css'
function Viewroomssingly() {
    const [data,setData] = useState()
    const {id} =useParams()
    console.log(id);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/hotelapi/singleroom/${id}`).then((response)=>{
            setData(response.data)
        })
    },[])
    console.log('dada',data);
  return (
    <>
    <div class="container-fluid ">
                <h1 className='text-center'>About Rooms</h1>
                <div className=' mainroom'>
                    
                        <div class="card-main">
                            <div class="card">
                                <img src="/assets/room1.jpg" class="card-img-top new" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">{data ? data.rooms : ""}</h5>
                                    <p class="card-text">Our superior rooms exude an air of eminence. Enveloped in soothing colours with wooden flooring, these rooms feature large, airy, sun-kissed windows, plush armchairs and ottomans and elegant drop-down lights.</p>
                                    <h5 className='wifi'>Free wifi</h5>
                                    <h5 className='wifi'>{data ? data.width : ""}</h5>
                                    <h5 className='wifi'>Adult:{data ? data.adults : ""} Child:{data ? data.childs : ""}</h5>
                                    <h5 className='wifi'>{data ? data.amount : ""}</h5>
                                    <div className='book'>
                                        <a type="button" class="btn btn-info bttn "  href="/forms">BOOK NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
    
    
    </>
  )
}

export default Viewroomssingly