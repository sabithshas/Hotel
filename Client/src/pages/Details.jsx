import React from 'react'
import './Details.css'
function Details() {
  return (
    <>
    <div className='container-fluid '>
    <table class="table table-striped table-hover ">
    <thead className='art'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Check In</th>
      <th scope="col">Adults</th>
      <th scope="col">Children</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody className='trees'>
    <tr>
      <th scope="row">Sabith</th>
      <td>shas@gmail.com</td>
      <td>1234567899</td>
      <td>14/10/2022</td>
      <td>2</td>
      <td>1</td>
      <td><button type="button" class="btn btn-info me-5">Update</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>  
    <tr>
      <th scope="row">Sabith</th>
      <td>shas@gmail.com</td>
      <td>1234567899</td>
      <td>14/10/2022</td>
      <td>2</td>
      <td>1</td>
      <td><button type="button" class="btn btn-info me-5">Update</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>  
  </tbody>
</table>
</div>
    </>
  )
}

export default Details