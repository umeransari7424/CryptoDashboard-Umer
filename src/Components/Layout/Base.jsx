import React from 'react'
import Boardsidebar from './Boardsidebar'

function Base(props) {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-5 col-7 col-12">
                    <Boardsidebar/>
                </div>
                <div className="col-md-9 col-12 welcom">
                    {props.children}
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Base