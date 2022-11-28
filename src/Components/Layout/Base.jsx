import React from 'react'
import Boardsidebar from './Boardsidebar'
import Header from './Header'

function Base(props) {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
            <Header/>
            </div>
            <div className="row">
                <div className="col-md-3 boardsidebar ">
                    <Boardsidebar/>
                </div>
                <div className="col-md-9  welcom">
                    {props.children}
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Base