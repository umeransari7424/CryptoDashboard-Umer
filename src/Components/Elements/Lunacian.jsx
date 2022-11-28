import React from 'react'
// import Badge from 'react-bootstrap/Badge';
import { HiBars3BottomRight } from 'react-icons/hi2';
import sales from "../Utils/Sales.json"
import recent from "../Utils/Recent.json"

function Lunacian() {
  return (
    <div className='lunacian'>
        <div className="container py-5">
        <div className="row mx-0 stat ">
                <div class="card stat-card">
                  <div class="card-header px-4 d-flex justify-content-between">
                    <div>
                    Overall Stats
                    </div>
                  
                  <div>
                  
                  <span className="badge text-bg-secondary">24H</span>
                  <span className="badge text-bg-secondary">7D</span>
                  <span className="badge text-bg-secondary">30D</span>
                   
                  </div>
                  </div>
                  <div class="card-body d-flex justify-content-between px-4">
                    {/* <div  className="py-4">
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
                    </div> */}
                    <div className="py-4">
                      <div>
                        <img
                          src="Assets/c1.png"
                          className="img-fluid"
                          style={{ width: "30px", height: "40px",marginLeft:"7px" }}
                          alt="card1 pic"
                        />
                      </div>
                      <br />
                      <div className="d-flex">
                        
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
                          className="img-fluid"
                          style={{ width: "30px", height: "40px" ,marginLeft:"7px" }}
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
                          className="img-fluid"
                          style={{ width: "30px", height: "40px",marginLeft:"7px"  }}
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
        <div className="row sale">
        <div class=" px-2 d-flex justify-content-between">
                    <div>
                    <span className='top'>
                    Top 
                    Sales
                    </span>
                    
                    
                    <span className="badge text-bg-secondary">All</span>
                  <span className="badge text-bg-secondary">Axie</span>
                  <span className="badge text-bg-secondary">Land</span>
                  <span className="badge text-bg-secondary">Item</span>
                  <span className="badge text-bg-secondary">Rune</span>
                  <span className="badge text-bg-secondary">Charm</span>
                    </div>
                  
                  <div>
                  
                  <span className="badge text-bg-secondary">24H</span>
                  <span className="badge text-bg-secondary">7D</span>
                  <span className="badge text-bg-secondary">30D</span>
                   
                  </div>
                  </div>
        </div>
        <div className="row py-4 px-1">
           {
            sales.map(item=>(
              <div className="col-md-4 mt-3">
              <div className="card p-3 salecard" >
                 <div className='d-flex justify-content-between'>
                  <div>
                  <div className='d-flex'>
                      <div>
                          <img src={item.img} alt="Lunacian" />
                      </div>
                      <div>
                      <div>
                      <span className="badge location text-bg-secondary"  style={{borderColor:item.color}}>
                          <img src={item.locimg} alt="location"/> &nbsp;
                          <span style={{color:item.color }}>
                          {item.location}
                          </span>
                          </span>  
                      </div>
                          <div>
                          <p className='hours'>{item.hour}</p>
                          </div>
                      </div>
  
                  </div>
                  </div>
                  <div className='text-end mt-1'>
                      <div>
                          <p className='price1'>{item.price}</p>
                      </div>
                      <div>
                         <p className='price2'>  <HiBars3BottomRight size={"25px"}/> &nbsp; {item.price2}</p>
                      </div>
                  </div>
  
                 </div>
  
  
              </div>
              </div>
            ))
           }
        </div>
        <div className="row sale">
        <div class=" px-2 d-flex justify-content-between">
                    <div>
                    <span className='top'>
                    Recent 
                    Sales
                    </span>
                    
                    
                    <span className="badge text-bg-secondary">All</span>
                  <span className="badge text-bg-secondary">Axie</span>
                  <span className="badge text-bg-secondary">Land</span>
                  <span className="badge text-bg-secondary">Item</span>
                  <span className="badge text-bg-secondary">Rune</span>
                  <span className="badge text-bg-secondary">Charm</span>
                    </div>
                  
                  <div>
                  
                  <span className="badge text-bg-secondary">24H</span>
                  <span className="badge text-bg-secondary">7D</span>
                  <span className="badge text-bg-secondary">30D</span>
                   
                  </div>
                  </div>
        </div>
        <div className="row mt-5">
          {
            recent.map(item=>(
              <div className="col-md-4">
          <div class="card lunacian-card mb-3" >
  <img src={item.img} className="img-fluid position-relative" alt="..."/>
  <span className='position-absolute m-3 p-1' style={{color:item.color,backgroundColor:"rgb(38, 48, 75)"}}> #345678</span>
  <div class="card-body">
  <h5>{item.txt}</h5>
    <span className='guild' >
    {item.para}</span>
  </div>
</div>
          </div>
            ))
          }
        </div>
        <div className="row sale">
        <div class=" px-2 d-flex justify-content-between">
                    <div>
                    <span className='top'>
                    Recent 
                    Listing
                    </span>
                    
                    
                    <span className="badge text-bg-secondary">All</span>
                  <span className="badge text-bg-secondary">Axie</span>
                  <span className="badge text-bg-secondary">Land</span>
                  <span className="badge text-bg-secondary">Item</span>
                  <span className="badge text-bg-secondary">Rune</span>
                  <span className="badge text-bg-secondary">Charm</span>
                    </div>
                  
                  <div>
                  
                  <span className="badge text-bg-secondary">24H</span>
                  <span className="badge text-bg-secondary">7D</span>
                  <span className="badge text-bg-secondary">30D</span>
                   
                  </div>
                  </div>
        </div>
        <div className="row mt-5">
          {
            recent.map(item=>(
              <div className="col-md-4">
          <div class="card lunacian-card mb-3" >
  <img src={item.img} className="img-fluid position-relative" alt="..."/>
  <span className='position-absolute m-3 p-2' style={{color:item.color,backgroundColor:"#1B2130BF"}}> #345678</span>
  <div class="card-body">
  <h5>{item.txt}</h5>
    <span className='guild'>
    {item.para}</span>
  </div>
</div>
          </div>
            ))
          }
        </div>
        </div>
        
    </div>
  )
}

export default Lunacian