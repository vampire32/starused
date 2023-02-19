import React from 'react'
import location from '../images/location-white.png'
import telphone from '../images/telephone-white.png'
import envolpe from '../images/envelope-white.png'
import i1 from '../images/i-1.jpg'
import i2 from "../images/i-2.jpg";
import i3 from "../images/i-3.jpg";
import i4 from "../images/i-4.jpg";
import i5 from "../images/i-5.jpg";
import i6 from "../images/i-6.jpg";
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import link from '../images/linkedin.png'



const Footer = () => {
  return (
    <>
    <section className="info_section layout_padding2" style={{marginTop:'5%'}}>
    <div className="container">
      <div className="info_logo">
        <h2>
          Digitf
        </h2>
      </div>
      <div className="row">

        <div className="col-md-3">
          <div className="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div className="img-box">
                <img src={location} width="18px" alt=""/>
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src={telphone} width="12px" alt=""/>
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src={envolpe} width="18px" alt=""/>
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="info_insta">
            <h5>
              Instagram
            </h5>
            <div className="insta_container">
              <div>
                <a href="">
                  <div className="insta-box b-1">
                    <img src={i1} alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-2">
                    <img src={i2} alt=""/>
                  </div>
                </a>
              </div>

              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src={i3} alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src={i4} alt=""/>
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src={i5} alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src={i6} alt=""/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href="">
                <img src={fb} alt=""/>
              </a>
              <a href="">
                <img src={twitter} alt=""/>
              </a>
              <a href="">
                <img src={link} alt=""/>
              </a>
              <a href="">
                <img src={yt} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  


  
  <div className="container-fluid footer_section ">
    <div className="container">
      <p>
        &copy; 2022 All Rights Reserved By
        <a href="#"> Syed Abdul Moiz Shah</a>
      </p>
    </div>
  </div>
    
    
    </>
  )
}

export default Footer