import React from "react";
import game from "../Utils/Games.json" 

function Games() {
  return (
    <div className="game">
      <div className="container pt-5">
        <div className="row">
          <div>
            <h1>Games</h1>
          </div>
        </div>
        <div className="row">
          {
            game.map(item=>(
                <div className="col-md-4 mt-5">
            <div className="card" >
              <img src={item.img} className="card-img-top" alt="non" />
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
        </div>
      </div>
    </div>
  );
}

export default Games;
