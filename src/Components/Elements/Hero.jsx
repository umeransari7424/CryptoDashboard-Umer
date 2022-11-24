import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import crypto from "../Utils/Crypto.json";
import {BsFillPlayFill} from "react-icons/bs"

function Hero() {
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
  return (
    <div className="hero py-5">
      <div className="container-fluid py-3">
        <div className="row" >
          <div className="col-md-12 cryptoyield">
            <div>
              <h1>Welcom To Crypto Yield</h1>
            </div>{" "}
            <br />
            <div>
              <div className="py-3">
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
                      src="Assets/BG.png"
                      alt="image2"
                    />

                    <div className="hello">
                      <h3>A Nation Gather</h3>
                      <p>Origin is now available to play via Mavis Hub!</p>
                      <div>
                        <button type="button" className="btn btn-primary">
                          <b>Buy Ticket</b>
                        </button>{" "}
                        &nbsp; &nbsp; &nbsp;
                        <button type="button" className="btn buy btn-primary">
                          <b>Buy Ticket</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="img-fluid "
                      width={"930px"}
                      src="Assets/BG.png"
                      alt="image1"
                    ></img>
                    <div className="hello">
                      <h3>A Nation Gather</h3>
                      <p>Origin is now available to play via Mavis Hub!</p>
                      <div>
                        <button type="button" className="btn btn-primary">
                          <b>Buy Ticket</b>
                        </button>{" "}
                        &nbsp; &nbsp; &nbsp;
                        <button type="button" className="btn buy btn-primary">
                          <b>Buy Ticket</b>
                        </button>
                      </div>
                    </div>
                    <br /> <br />
                  </div>
                  <div>
                    <img
                      className="img-fluid  "
                      width={"930px"}
                      src="Assets/BG.png"
                      alt="image2"
                    />

                    <div className="hello">
                      <h3>A Nation Gather</h3>
                      <p>Origin is now available to play via Mavis Hub!</p>
                      <div>
                        <button type="button" className="btn btn-primary">
                          <b>Buy Ticket</b>
                        </button>{" "}
                        &nbsp; &nbsp; &nbsp;
                        <button type="button" className="btn buy btn-primary">
                          <b>Buy Ticket</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </Carousel>
              </div>{" "}
              <br />
              <br />
              <div className="row ">
                <h1>This week in Lunacia</h1>
                <p>
                  General stats from the past 7 days in the Axie Infinity
                  universe.
                </p>

                <br />

                {crypto.map((item) => (
                  <div className="col-md-4 py-3">
                    <div className="card cryptocard d-flex ">
                      <div>
                        <img
                          src={item.img}
                          className="img=fluid"
                          style={{ width: "50px", height: "64.91px" }}
                          alt="card1 pic"
                        />
                      </div>
                      <br />
                      <div>
                        <h5 className="axies">{item.txt}</h5>
                      </div>
                      <div>
                        <span className="price">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>{" "}
              <br />
              <div className="row mx-0">
                <div class="card stat-card">
                  <div class="card-header px-4">Overall Stats</div>
                  <div class="card-body d-flex justify-content-between ">
                    <div  className="py-4">
                      <div>
                        <img
                          src="Assets/c5.png"
                          className="img=fluid"
                          style={{ width: "30px", height: "40px" }}
                          alt="card1 pic"
                        />
                      </div>
                      <br />
                      <div>
                        <h5 className="new-axies">New Axiex</h5>
                      </div>
                      <div>
                        <span className="new-price">11,568,537</span>
                      </div>
                    </div>
                    <div className="py-4">
                      <div>
                        <img
                          src="Assets/c1.png"
                          className="img=fluid"
                          style={{ width: "30px", height: "40px" }}
                          alt="card1 pic"
                        />
                      </div>
                      <br />
                      <div className="d-flex">
                        <div>
                          <img src="Assets/Line 1.png" className="img-fluid line" alt="Line" />
                        </div>
                        <div>
                        <div>
                        <h5 className="new-axies">Total Owner</h5>
                      </div>
                      <div>
                        <span className="new-price">2,050,716</span>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="py-4">
                      <div>
                        <img
                          src="Assets/c4.png"
                          className="img=fluid"
                          style={{ width: "30px", height: "40px" }}
                          alt="card1 pic"
                        />
                      </div>
                      <br />
                      <div className="d-flex">
                        <div>
                          <img src="Assets/Line 1.png" className="img-fluid line" alt="Line" />
                        </div>
                        <div>
                        <div>
                        <h5 className="new-axies">Total Volume (ETH)</h5>
                      </div>
                      <div>
                        <span className="new-price">1,362,030</span>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="py-4">
                      <div>
                        <img
                          src="Assets/c1.png"
                          className="img=fluid"
                          style={{ width: "30px", height: "40px" }}
                          alt="card1 pic"
                        />
                      </div>
                      <br />
                      <div className=" d-flex">
                        <div>
                          <img src="Assets/Line 1.png" className="img-fluid line" alt="Line" />
                        </div>
                        <div>
                        <div>
                        <h5 className="new-axies">Transections</h5>
                      </div>
                      <div>
                        <span className="new-price">18,164,083</span>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="row mx-0 mt-5">
                <div class="card stat-card">
                  <div class="card-header d-flex justify-content-between px-4">
                    <div>
                    
                    Games
                    </div>
                  
                  <div>
                  <button type="button" className="btn viewbtn btn-primary">
                          View All
                        </button>
                  </div>
                  </div>
                  <div class="card-body d-flex justify-content-between ">
                    <div  className="py-4">
                      
                      <br />
                      <div className="d-flex">
                        <div>
                          <img src="Assets/Rectangle 11.png" alt="Rectangle11" />
                        </div>
                        <div>
                        <div >
                          
                        <h5 className="axies axie">Axie Infinity: Origins</h5>
                         
                      </div> 
                      <div className="d-flex">
                        &nbsp; &nbsp;
                        <div>
                        <button type="button" className="btn viewbtn btn-primary">
                          <BsFillPlayFill size={"15px"}/>  Play
                        </button>
                        </div>&nbsp; &nbsp;
                        <div>
                        <button type="button" className="btn viewbtn btn-primary">
                          <b>View</b>
                        </button>
                        </div>

                        
                      </div>
                        </div>

                      </div>
                      
                    </div>
                    <div className="py-4">
                      
                      <br />
                      <div className="d-flex">
                        <div>
                          <img src="Assets/Line 1.png" className="img-fluid line" alt="Line" />
                        </div>
                        <div className="d-flex rectangle">
                        <div>
                          <img src="Assets/Rectangle 22.png" alt="Rectangle11" />
                        </div>
                        <div>
                        <div >
                          
                        <h5 className="axies axie">Axie Classic</h5>
                         
                      </div> 
                      <div className="d-flex">
                        &nbsp; &nbsp;
                        <div>
                        <button type="button" className="btn viewbtn btn-primary">
                          <BsFillPlayFill size={"15px"}/>  Play
                        </button>
                        </div>&nbsp; &nbsp;
                        <div>
                        <button type="button" className="btn viewbtn btn-primary">
                          <b>View</b>
                        </button>
                        </div>

                        
                      </div>
                        </div>

                      </div>
                        
                      </div>
                    </div>
                    <div className="py-4">
                      
                      <br />
                      <div className="d-flex">
                        <div>
                          <img src="Assets/Line 1.png" className="img-fluid line" alt="Line" />
                        </div>
                        <div className="d-flex rectangle">
                        <div>
                          <img src="Assets/Rectangle 11.png" alt="Rectangle11" />
                        </div>
                        <div >
                        <div >
                          
                        <h5 className="axies axie">Axie Infinity: Raylights</h5>
                         
                      </div> 
                      <div className="d-flex">
                        &nbsp; &nbsp;
                        <div>
                        <button type="button" className="btn viewbtn btn-primary">
                          <BsFillPlayFill size={"15px"}/>  Play
                        </button>
                        </div>&nbsp; &nbsp;
                        <div>
                        <button type="button" className="btn viewbtn btn-primary">
                          <b>View</b>
                        </button>
                        </div>

                        
                      </div>
                        </div>

                      </div>
                        
                      </div>
                    </div>
                    
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Hero;
