import React from 'react'
import "./Second.css"
import man from "../img/man 1.png"
import woman from "../img/woman 1.png"
import bike from "../img/bike 1.png"

const Second = () => {
    return (
        <div className="second__Main">
            <div className="second__Container">
                <div className="second__Description">
                    <h1>Discover more</h1>
                    <p>Explore the tech site and gain insights on the products offered</p>
                    <button>Get Quote</button>
                </div>
                <img className="image1" src={man} alt="" />
                <img className="image2" src={woman} alt="" />
                <img className="image3" src={bike} alt="" />
                <div className="second__Enquire">
                    <h1>Browse Products</h1>
                    <p>Get to know our services and produts offered and we would be glad to help you choose the right device for you</p>
                    <button>Get Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Second
