import React from "react";
import { Link } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AiFillHome } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { BsFillPlayCircleFill, BsFillStarFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi";

function Boardsidebar() {
  return (
    // <div className="sidebar">
    //   <div className="container-fluid  ">

    //     <div className="row">
    //       <div className="col-md-3 p-3 py-5 cryptoyield">
    //       <h1 className="text-center">CryptoYield</h1>
    //         <ProSidebarProvider className="pro">
    //           <Sidebar>
    //             <Menu>

    //                 <MenuItem> <AiFillHome size="25px" style={{marginBottom:"6px"}}/> &nbsp;  Home </MenuItem> <br />
    //                 <MenuItem> <SlHandbag size="25px" style={{marginBottom:"6px"}}/> &nbsp; Market Place </MenuItem>

    //               <MenuItem> <BsFillPlayCircleFill size="25px" style={{marginBottom:"6px"}}/> &nbsp; Game </MenuItem>
    //               <MenuItem> <BsFillStarFill size="25px" style={{marginBottom:"6px"}}/> &nbsp; Lunacian Express </MenuItem>
    //               <MenuItem> <HiBell size="25px" style={{marginBottom:"6px"}}/> &nbsp; Events </MenuItem>
    //             </Menu>
    //           </Sidebar>

    //         </ProSidebarProvider>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div className="sidebar">
      <div className="container-fluid text-start ">
        <div className="row">
          <div className=" dashboard pt-5">
            <div>
              <h1>
                <img src="Assets/crypto.png" alt="crypto" />
                Crypto Yield
              </h1>
            </div>
            <div>
              <Link to="/">
                <button type="button" className="btn btn0 btn-primary">
                  {" "}
                  <AiFillHome
                    size={"25px"}
                    style={{ paddingBottom: "3px" }}
                  />{" "}
                  &nbsp; Home
                </button>
              </Link>
            </div>{" "}
            <br />
            <div>
              <Link to="/marketplace">
                <button type="button" className="btn btn1 btn-primary">
                  {" "}
                  <SlHandbag
                    size={"25px"}
                    style={{ paddingBottom: "3px" }}
                  />{" "}
                  &nbsp;Market Place
                </button>
              </Link>
            </div>{" "}
            <br />
            <div>
              <button type="button" className="btn btn2 btn-primary">
                <BsFillPlayCircleFill
                  size={"25px"}
                  style={{ paddingBottom: "3px" }}
                />{" "}
                &nbsp;Game
              </button>
            </div>{" "}
            <br />
            <div>
              <button type="button" className="btn btn3 btn-primary">
                <BsFillStarFill
                  size={"25px"}
                  style={{ paddingBottom: "3px" }}
                />{" "}
                &nbsp;Lunacian Express
              </button>
            </div>{" "}
            <br />
            <div>
              <button type="button" className="btn btn4 btn-primary">
                <HiBell size={"25px"} style={{ paddingBottom: "3px" }} />{" "}
                &nbsp;Events
              </button>
            </div>
            <div>
              <button type="button" className="btn btn5 btn-primary">
                <HiBell size={"25px"} style={{ paddingBottom: "3px" }} />{" "}
                &nbsp;Events
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boardsidebar;
