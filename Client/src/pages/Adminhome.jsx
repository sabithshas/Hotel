import React from 'react'
import Adminnav from '../components/Adminnav'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './Adminhome.css'
function Adminhome() {
  return (
    <>
      <Adminnav />
      <div className='container-fluid'>
        <div className=''>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./assets/adminbackground.jpg" class="background" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h4>Sabith Hotel</h4>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./assets/adminbackground3.jpeg" class="background" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h4>Sabith Hotel</h4>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./assets/adminbackground2.jpg" class="background" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h4>Sabith Hotel</h4>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-2 designs'>
        <p className='designsname'>Designs OF Rooms</p>
        <div class="card text-bg-dark">
          <img src="./assets/singleroomadmin.jpg" class="card-img designsimg" alt="..."></img>
            <div class="card-img-overlay textimg">
              <h5 class="card-title admincard ">Single Room</h5>
              <p class="card-text admintext">A single room is for one person, a double room is for two people,<br></br> a twin room is for two people who will have 1 small individual bed for each, <br></br>and a family room is for four or more people</p>
              
            </div>
        </div>
      </div>
      <div className='container-fluid mt-2 designs'>
        <p className='designsname'>Designs OF Rooms</p>
        <div class="card text-bg-dark">
          <img src="./assets/doubleroomadmin.jpg" class="card-img designsimg" alt="..."></img>
            <div class="card-img-overlay textimg">
              <h5 class="card-title admincard ">Suite Room</h5>
              <p class="card-text admintext">A single room is for one person, a double room is for two people,<br></br> a twin room is for two people who will have 1 small individual bed for each, <br></br>and a family room is for four or more people</p>
              
            </div>
        </div>
      </div>
      <div className='container-fluid mt-2 designs'>
        <p className='designsname'>Designs OF Rooms</p>
        <div class="card text-bg-dark">
          <img src="./assets/suiteroomadmin.jpg" class="card-img designsimg" alt="..."></img>
            <div class="card-img-overlay textimg">
              <h5 class="card-title admincard">Single Room</h5>
              <p class="card-text admintext">Offering the same experience as our popular one-bedroom suites, <br></br>Premium Suites include additional upgrades of Premium WiFi, a Keurig coffee brewer,<br></br> plus snacks and drinks which are replenished daily.</p>
              
            </div>
        </div>
      </div>
      <div className='container-fluid mt-2 designs'>
        <p className='designsname'>Designs OF Rooms</p>
        <div class="card text-bg-dark">
          <img src="./assets/prsuite.jpg" class="card-img designsimg" alt="..."></img>
            <div class="card-img-overlay textimg">
              <h5 class="card-title admincard">Premium Suite Room</h5>
              <p class="card-text admintext">Offering the same experience as our popular one-bedroom suites, <br></br>Premium Suites include additional upgrades of Premium WiFi, a Keurig coffee brewer,<br></br> plus snacks and drinks which are replenished daily.</p>
              
            </div>
        </div>
      </div>
      <div className='container-fluid foot'>
        <Footer/>
      </div>
    </>
  )
}

export default Adminhome