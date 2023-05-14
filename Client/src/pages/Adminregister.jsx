import axios from 'axios'
import React, { useState } from 'react'
import './Adminregister.css'
function Adminregister() {

    const [data, setData] = useState({})
    const [postImage, setPostImage] = useState()

    const datas = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        console.log(data);
    }
    const submit = (e) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append('image', postImage)
        formdata.append('rooms', data.rooms)
        formdata.append('width', data.width)
        formdata.append('adults', data.adults)
        formdata.append('amount', data.amount)
        formdata.append('childs', data.childs)

        for (var pair of formdata.entries()) {
            console.log(pair[0] + ' ,' + pair[1]);
        }



        axios.post('http://127.0.0.1:8000/hotelapi/Addrooms', formdata).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })


    }
    return (
        <>
            <div className='container-fluid '>
                <div className=''>
                    <div className='regmain'>
                        <form >
                            <div >
                                <label for="name" className='types' >Room Type</label>
                                <input type="text" className='typeinput' name='rooms' onChange={datas} ></input>
                            </div>
                            <div >
                                <label for="email" className='types' >Square Feet</label>
                                <input type="text" className='typeinput' name='width' onChange={datas} ></input>
                            </div>
                            <div >
                                <label for="phone" className='types' >No of Adult</label>
                                <input type="text" className='typeinput' name='adults' onChange={datas}></input>
                            </div>
                            <div >
                                <label for="username" className='types' > No of Child</label>
                                <input type="text" className='typeinput' name='childs' onChange={datas}></input>
                            </div>
                            <div >
                                <label for="password" className='types' >Amount</label>
                                <input type="text" className='typeinput' name='amount' onChange={datas} ></input>
                            </div>
                            <div >
                                <label for="photo" className='types' >photo</label>
                                <input type="file" className='typeinput' name='image' onChange={(e) => setPostImage(e.target.files[0])} ></input>
                            </div>

                            <div className='tip'>
                                <button className='add' onClick={submit} >submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminregister