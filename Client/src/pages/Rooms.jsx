import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Rooms.css'
function Rooms() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/hotelapi/getroom').then((response) => {
            setData(response.data.data)
            console.log('user',response.data.data);
        })

    }, [])
   const viewrooms = (id) =>{
    console.log(id);
    navigate(`/viewroomssingly/${id}`)
    
   }
   
   console.log(data);
    return (
        <>
            <div class="container-fluid ">
                <h1 className='text-center'>Rooms</h1>
                <div className=' mainroom'>
                    {data&&data.map((i) =>
                        <div class="card-main">
                            <div class="card">
                                <img src={`http://127.0.0.1:8000${i.image}`} class="card-img-top new" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">{i?.rooms}</h5>
                                    <p class="card-text">Our superior rooms exude an air of eminence. Enveloped in soothing colours with wooden flooring, these rooms feature large, airy, sun-kissed windows, plush armchairs and ottomans and elegant drop-down lights.</p>
                                    <h5 className='wifi'>{i?.width}</h5>
                                    <h5 className='wifi'>Free wifi</h5>
                                    <h5 className='wifi'>Adult:{i?.adults} Child:{i.childs}</h5>
                                    <h5 className='wifi'>{i?.amount}</h5>
                                    <div className='book'>
                                        <a type="button" class="btn btn-info bttn " onClick={()=>{viewrooms(i?.id)}} href="">VIEW</a>
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

export default Rooms