import React, { useState } from 'react'
import logo from "../img/logo1.png"
import "./Navbar.css"
import { FaBars , FaTimes} from "react-icons/fa";


const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    return(
        <div className="navbar__Main">
           <header className="navbar__Container">
            <div className="logo__Holder">
           <img src={logo} />
           <h1>Reality</h1>
        </div> 
        {toggle ? <FaTimes className="menu__Icon" size="1.5rem" onClick={()=>setToggle(false)} /> : <FaBars className="menu__Icon" size="1.5rem" onClick={()=>setToggle(true)}/>}  
           <ul className={toggle ? "nav__Slide" : ""}>
               <li>Home</li>
               <li>VR Headsets</li>
               <li>Buy Now</li>
           </ul>
           </header>
        </div>
    )
}

export default Navbar
