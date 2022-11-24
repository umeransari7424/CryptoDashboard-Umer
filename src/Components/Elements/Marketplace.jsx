import React from 'react'
import {BsApple} from 'react-icons/bs'
import {AiFillWindows,AiFillAndroid} from 'react-icons/ai'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
              <span className='infinity'>Axie Infinity: Origins</span> <br />
              <span>A PVP tactical card </span> <span>battler Install Mavis Hub</span>
            </div>
            <div className='mt-3'>
              <BsApple className='mt-1' size={"25px"}/> &nbsp; 
              <AiFillWindows className='mt-2' size={"30px"}/> &nbsp; 
              <AiFillAndroid className='mt-2' size={"30px"}/> &nbsp; 
            </div>
            
          </div>
          <div className='mt-3'>
          <button type="button" className="btn installbtn btn-primary">
                          Install Hub
                        </button>
          </div>

          </div>
          
        </div>
        <div className="row mt-5 mx-0">
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
        <div className="row mt-5 mx-0">
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
                  <span>{item.para}</span>
                </p>
              </div>
            </div>
            </div>
            ))
          }
            
         
          
                  
                </Carousel>
        
        </div>
      </div>
      
    </div>
  )
}

export default Marketplace