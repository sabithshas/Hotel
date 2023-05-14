import React from 'react'
import Footer from '../components/Footer'
import './Hotels2.css'
function Hotels2() {
    return (
        <>
            <div className='container-fluid '>
                <h3 className='text-center'>Popular Destination Near</h3>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active ">
                            <div className='var'>
                                <div class="card cardimage " >
                                    <img src="./assets/cardimage3.webp" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">TEMPLE</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                                <div class="card cardimage" >
                                    <img src="./assets/cardimage4.jpg" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">BEACH</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                                <div class="card cardimage " >
                                    <img src="./assets/cardimage5.webp" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">PARK</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                        <div className='var'>
                                <div class="card cardimage " >
                                    <img src="./assets/cardimage6.jpg" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">FOUNTAIN</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                                <div class="card cardimage" >
                                    <img src="./assets/cardimage7.jpg" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">GARDEN</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                                <div class="card cardimage " >
                                    <img src="./assets/cardimage8.jpg" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">FLOWERS</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                        <div className='var'>
                                <div class="card cardimage " >
                                    <img src="./assets/cardimage1.avif" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">GOLDEN</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                                <div class="card cardimage" >
                                    <img src="./assets/cardimage2.jpg" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">DAM</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                                <div class="card cardimage " >
                                    <img src="./assets/sprciality1.jpeg" class="card-img-top rimg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">RESTAURANTS</h5>
                                        <p class="card-text details">The common characteristics of tourist destinations are attraction, comfort, and accessibility, a specific area with certain tourism resources, facilities, and transportation conditions, which can attract a certain number of tourists to carry out tourism activities.</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='ftr'>
            <Footer/>
            </div>
            
        </>
    )
}

export default Hotels2