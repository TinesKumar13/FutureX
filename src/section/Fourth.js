import React from 'react'
import "./Fourth.css"
import cool from "../img/womanVR.png"

const Fourth = () => {
    return (
        <div className="fourth__Main">
           <div className="fourth__Container">
<div className="image__Container">
<img src={cool} alt="" />
    </div>               
    <header>
                   <h1>Visit Our Store</h1>
                   <p>Located at the heart of the city and <br/> opened on request,feel free to visit <br/> us anytime you want</p>
                   <button>Get a quote</button>
               </header>
           </div>
        </div>
    )
}

export default Fourth
