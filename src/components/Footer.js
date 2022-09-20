import React, {useState} from 'react';
import styled from "styled-components"
import {SlideBtn} from "../style";
import Logo from "../assets/icons/logo-inverse-198x66.png"
import LikeIcon from "../assets/icons/like-icon-58x25.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsFillEnvelopeFill} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaGooglePlusG} from "react-icons/fa"

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  width: 100vw;
  height: 570px;
  background-color: #38393B;
  .section-1-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    height: 300px;
    .section-1{
      max-width: 1200px;
      width: 1200px;
      display: flex;
      color: #fff;
      h5{
        margin-bottom: 30px;
        font-size: 24px;
        font-weight: 700;
      }
      ul{
        padding: 0;
        margin-right: 70px;
        li{
          list-style-type: none;
          font-size: 16px;
          margin-bottom: 10px;
          cursor: pointer;
          :hover{
            color: #FFE745;
            transition: all 0.3s ease-in-out;
          }
          font-weight: 700;
        }
      }
      .column-3{
        p{
          font-size: 16px;
          color: #888889;
        }
      }
    }
  }
  .newsletter{
    margin-top: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
      height: 60px;
      width: 320px;
      padding: 10px;
      background-color: #565758;
      border: 1px solid #fff;
      color: #fff;
      padding-left: 15px!important;
      outline: none;
      ::placeholder{
        color: #fff;
      }
      :focus{
        outline: none;
      }
    }
  }
`

const Second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  color: #fff;
  img{
    margin: 0 10px;
    cursor: pointer;
  }
  .container{
    max-width: 1200px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        font-weight: 700;
        cursor: pointer;
        margin: 0;
        :hover{
          color: #FFE745;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  border-bottom: 1px solid lightgray;
  
`

const Third = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  .container{
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
    span{
      color: rgba(255, 255, 255, 0.4);
    }
`

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  cursor: pointer;
  :hover {
    background: ${({hover}) => !hover && "#6046B6"};
    transition: all 0.3s ease-in-out;
  }
`


function Footer() {
    const [email, setEmail] = useState("")
    return (
        <Wrapper>
            <div className="section-1-wrapper">
                <div className="section-1">
                    <div className="column-1" style={{marginRight: "8rem"}}>
                        <h5>What We Offer</h5>
                        <div style={{display: "flex"}}>
                            <ul>
                                <li>Pizzas</li>
                                <li>Salads</li>
                                <li>Seafoods</li>
                            </ul>
                            <ul>
                                <li>Burgers</li>
                                <li>Drinks</li>
                                <li>Salads</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column-1">
                        <h5>Information</h5>
                        <div style={{display: "flex"}}>
                            <ul>
                                <li>About us</li>
                                <li>Latest News</li>
                                <li>Our Menu</li>
                            </ul>
                            <ul>
                                <li>FAQ</li>
                                <li>Shop</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column-3">
                        <h5>Newsletter</h5>
                        <p>Sign up today for the latest news and updates.</p>
                        <div className="newsletter">
                            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter your E-mail"/>
                            <SlideBtn small onClick={() => setEmail("")}>Subscribe</SlideBtn>
                        </div>
                    </div>

                </div>

            </div>
            <Second>
                <div className="container">
                    <img src={Logo} alt="Pizza House Logo"/>
                    <span><img src={LikeIcon} alt="Like Icon"/> 9.4K</span>
                    <span><IconWrapper hover><BsFillTelephoneFill /></IconWrapper><p>+1 718-999-3939</p></span>
                    <span><IconWrapper hover><BsFillEnvelopeFill /></IconWrapper><p>info@demolink.org</p></span>
                    <span>
                        <IconWrapper><FaFacebookF /></IconWrapper>
                        <IconWrapper><FaTwitter /></IconWrapper>
                        <IconWrapper><FaInstagram /></IconWrapper>
                        <IconWrapper><FaGooglePlusG /></IconWrapper>
                    </span>
                </div>
            </Second>
            <Third>
                <div className="container">
                    <span>Website created by DipDev Team</span>
                    <span>© {new Date().getFullYear()}. All Rights Reserved. Design by TemplateMonster</span>
                </div>
            </Third>
        </Wrapper>
    );
}

export default Footer;