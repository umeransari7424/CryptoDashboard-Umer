import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Sidebar from '../Layout/Sidebar';
import {Link} from 'react-router-dom'
import {BsList} from 'react-icons/bs';
import { AiFillHome } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { BsFillPlayCircleFill, BsFillStarFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi";

export default function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" style={{background:"#000",border:"none"}}  onClick={handleShow}>
        <BsList size={"30px"} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="sidebar1">
      <div className="container-fluid text-start ">
        <div className="row">
          <div className=" dashboard pt-3">
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
            <Link to="/game">
              <button type="button" className="btn btn2 btn-primary">
                <BsFillPlayCircleFill
                  size={"25px"}
                  style={{ paddingBottom: "3px" }}
                />{" "}
                &nbsp;Game
              </button>
            </Link>
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
                {" "}
                &nbsp; &nbsp;Logout &nbsp; &nbsp;<HiBell size={"25px"} style={{ paddingBottom: "3px" }} />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
