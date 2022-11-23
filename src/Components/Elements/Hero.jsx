import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='hero py-5'>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-md-12 cryptoyield">
            <div className='row'>
        <h1>Welcom To Crypto Yield</h1>
            </div> <br />
            <div>
            <div className="row py-3">
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
                <img className="img-fluid " width={"930px"} src="Assets/BG.png" alt="image1"  >
                  </img>
                   <br /> <br />
                
              </div>
              <div>
                <img className="img-fluid  " width={"930px"}  src="Assets/BG.png" alt="image2" />
              
                <div className='hello'>

                <h3 >A Nation Gather</h3> 
                <p>Origin is now available to play via Mavis Hub!</p> 
                <div>
                <button type="button" className="btn btn-primary"><b>Buy Ticket</b></button> &nbsp; &nbsp; &nbsp;
                <button type="button" className="btn buy btn-primary"><b>Buy Ticket</b></button>
                </div>

                </div>
               
              </div>
              <div>
                <img className="img-fluid " width={"930px"}  src="Assets/BG.png" alt="image3" /> <br /> <br />
                
              </div>
              

            </Carousel>
           
            
            </div> <br />
            <br />
            <div className='row'>
        <h1>This week in Lunacia</h1>
        <p>General stats from the past 7 days in the Axie Infinity universe.</p>
            </div> <br />
          </div>
          </div><br />
          
        </div>
      </div>
    </div>
  )
}

export default Hero