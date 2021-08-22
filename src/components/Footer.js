import React from 'react'
import "./Footer.css"
import facebook from "../img/Facebook.png"
import instagram from "../img/Instagram logo.png"
import twitter from "../img/Twitter.png"
import linked from "../img/LinkedIn.png"

const Footer = () => {
    return (
        <div className = "footer__Main">
            <div className="footer__Container">
                <div className="footer__Details">

                    <div className="about__Us">
                        <h2>About Us</h2>
                        <ul>
                            <li>How we work</li>
                            <li>Careers</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    <div className="contact__Us">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Get in touch</li>
                            <li>Visit Us</li>
                            <li>Get a quote</li>
                        </ul>
                    </div>

                    <div className="social__Media">
                        <h2>Social Media</h2>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>

                </div>

                <div className="footer__End">
                    <h1>Reality</h1>
                    <div className="logo__Container">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linked} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
