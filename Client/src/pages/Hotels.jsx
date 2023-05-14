import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './Hotels.css'
import Hotels2 from './Hotels2'
function Hotels() {
  return (
    <>
      <Nav colorClass="redNav"/>
      {/* <Nav colorClass="blueNav"/> */}
      <div className='container-fluid main'>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="./assets/second.jpg" class="d-block mainimages image-fluid " alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h2>BOOK THE ROOM</h2>
                {/* <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="./assets/first.webp" class="d-block mainimages image-fluid" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h2>BOOK THE ROOM</h2>
                {/* <p>Some representative placeholder content for the second slide.</p> */}
              </div>
            </div>
            <div class="carousel-item">
              <img src="./assets/three.webp" class="d-block mainimages image-fluid" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h2>BOOK THE ROOM</h2>
                {/* <p>Some representative placeholder content for the third slide.</p> */}
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h2 className='text-center mt-2'>Our Specialities</h2>
        <p className="text-center">We give the Best rooms in the town<br></br>Our Specialities are not near This Areas</p>
      </div>
      <div className='part2'>
      <Hotels2/>
      </div>
      {/* <div className='part3'>
        <Footer/>
      </div> */}
      
    </>
  )
}

export default Hotels