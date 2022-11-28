// import React from 'react'
import React from 'react';
// import {Carousel as reactCarousel} from 'react-bootstrap/Carousel';
import {BsApple} from 'react-icons/bs'
import {AiFillWindows,AiFillAndroid} from 'react-icons/ai'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BsInfoCircleFill} from "react-icons/bs"
import game from "../Utils/Games.json";
// import {BsFillPlayFill} from "react-icons/bs"
function Marketplace() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='market'>
      <div className="container py-5">
        <div className="row market-axie mx-0">
          <div className='install d-flex justify-content-between'>
          <div className='d-flex hub'>
            <div className='mt-3'>
              <span className='infinity' >Axie Infinity: Origins</span> <br />
              <span className='tactical'>A PVP tactical card battler Install Mavis Hub</span>
            </div>
            <div className='mt-3'>
              <BsApple className='mt-1' size={"25px"} style={{color:"#545D69 "}}/> &nbsp; 
              <AiFillWindows className='mt-2' size={"30px"} style={{color:"#545D69 "}}/> &nbsp; 
              <AiFillAndroid className='mt-2' size={"30px"} style={{color:"#545D69 "}}/> &nbsp; 
            </div>
            
          </div>
          <div className='mt-3'>
          <button type="button" className="btn installbtn btn-primary">
                          Install Hub
                        </button>
          </div>

          </div>
          
        </div>
        <div className="row mt-5 ">
        {/* <reactCarousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </reactCarousel> */}
                <Carousel
                  responsive={responsive}
                  // autoPlay="true"
                  interval={2000}
                  infinite="true"
                  rewind={true}
                  axis="horizontal"
                  labels={true}
                  arrows={false}
                  showStatus={true}
                  showIndicators={true}
                  showThumbs={true}
                  showDots={true}
                  // dotListClass="custom-dot-list-style"
                  // itemClass="carousel-item-padding-40-px"
                >
                  <div>
                    <img
                      className="img-fluid  "
                      width={"930px"}
                      style={{ height:"320px"}}
                     
                      src="Assets/Rectangle 17.png"
                      alt="image2"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid "
                      width={"930px"}
                      src="Assets/BG.png"
                      alt="image1"
                    ></img>
                   
                    <br /> <br />
                  </div>
                  <div>
                    <img
                      className="img-fluid  "
                      width={"930px"}
                      src="Assets/BG.png"
                      alt="image2"
                    />

                  
                  </div>
                  
                </Carousel>
        </div>
        <div className="row mt-5 ">
        <Carousel
                  responsive={responsive1}
                  // autoPlay="true"
                  interval={2000}
                  infinite="true"
                  rewind={true}
                  axis="horizontal"
                  labels={true}
                  arrows={true}
                  showStatus={true}
                  showIndicators={true}
                  showThumbs={true}
                  showDots={true}
                 
                >
                 

                  
          {
            game.map(item=>(
              <div className="col-md-10 mt-5 mb-5">
            <div className="card" >
              <img src={item.img1} className="card-img-top" alt="game1" />
              <div className="card-body py-4">
                <p className="card-text">
                  <h6>{item.txt}</h6>
                  <span className='skymavis'>{item.para}</span>
                </p>
              </div>
            </div>
            </div>
            ))
          }
            
         
          
                  
                </Carousel>
        
        </div>
        <div className="row  mt-5">
                <div className="col-md-8 mt-4">
                <div class="card stat-card">
                  <div class="card-header d-flex justify-content-between px-4">
                    <div>
                    
                    Game Info
                    </div>
                  
                  <div className='d-flex'>
                    <div>
                  <h6 className='mt-2'>Collectibles &nbsp;<BsInfoCircleFill/> </h6>
                    </div>&nbsp; &nbsp;
                    <div>
                      <img src="Assets/c5.png" className='img-fluid' style={{width: "24px",
height: "24px"}} alt="c5" />
                    </div>
                    &nbsp; &nbsp;
                    <div>
                      <img src="Assets/c6.png" className='img-fluid' style={{width: "24px",
height: "24px"}} alt="c5" />
                    </div>
                    &nbsp; &nbsp;
                    <div>
                      <img src="Assets/c7.png" className='img-fluid' style={{width: "24px",
height: "24px"}} alt="c5" />
                    </div>
                  </div>
                  </div>
                  <div class="card-body d-flex justify-content-between ">
                    <div>
                    <h1>What is Axie Infinity: Origins?</h1>
                    <p>Axie Infinity Origins is a card-based strategy game where players collect, own, and use an infinite variety of creatures called Axies to battle. Players can take down evil Chimeras in the Adventure mode or challenge other players in the Arena to reach the top of the Leaderboard.</p>
                    <br />
                    <img src="Assets/Rectangle 19.png" className='img-fluid' alt="Rectangle" />

                    </div>
                    <div>
                    </div>
                   
                  </div>
                </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="card develop-card p-3">
                    <div className='d-flex justify-content-between text-start'>
                      <div >
                        <span className='develop'>Developed by:</span> <br /><br />
                        
                        <span className='develop'>Official Website:</span> <br /><br />
                        <span className='develop'>Early Access:</span> <br /><br />
                        <span className='develop'>Operation System:</span><br /><br />
                      </div>
                      <div>
                      <span className='sky'>Sky Mavis:</span> <br /><br />
                      <span className='sky'>https://axieinfinity.com</span> <br /><br />
                        <span className='aug'>18 Aug 2022</span> <br /><br />
                        <span><BsApple className='mb-2' size={"25px"}/> &nbsp; 
              <AiFillWindows className='mb-2' size={"30px"}/> &nbsp; 
              <AiFillAndroid className='mb-2' size={"30px"}/> &nbsp;</span> <br />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
      </div>
      
    </div>
  )
}

export default Marketplace