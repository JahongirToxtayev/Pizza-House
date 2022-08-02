import styled from "styled-components"
import {Cart} from "@styled-icons/bootstrap/Cart"
import BestAtmosImg from "../assets/images/bg-3.jpg"

const All=styled.body`
font-family: 'Poppins',sans-serif;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  padding: 10px 100px;
  margin: auto;
  position: relative;
  background: #F5F5F5;
  overflow: hidden;
  height: 80px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
  z-index: 2324342;
`

const LogoWrapperBefore = styled.div`
  position: absolute;
  right: 0;
  height: 150%;
  width: 100vw;
  background: #ffffff;
  transform: skewX(16deg);
  transform-origin: 50% 100%;
  will-change: transform;
  pointer-events: none;
  z-index: -1;
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const Button = styled.button`
    border: none;
    outline: none;
    font-weight: bold;
    background-color: transparent;
    margin: 0 10px;
    font-size: 18px;
    line-height: 1.34;
    padding: 10px 0;
    border-bottom: ${({borderBottom}) => borderBottom ? "5px solid #6046b6" : "5px solid transparent"};
    cursor: pointer;
    z-index: 1;
`

const CartIcon = styled(Cart)`
    width: 30px;
    height: 30px;
    color: #6046B6;
`

const CartItems = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    background: deepskyblue;
    right: -10px;
    top: -5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
`

const OurMenuTitle=styled.h1`
text-align: center;
font-weight: 400;
  font-size: 65px;
  letter-spacing: 2px;
  font-family: 'Times New Roman', Times, serif;
  
`
const MenuChild=styled.div`
margin: 30px 0;
`



const ImgWrapper=styled.div`
opacity: 0.8;
filter: brightness(0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
`

const ImgDiv=styled.div`
position: relative;
`

const MenuIconDiv=styled.div`
  &:hover {
    background-color: #FFE745;
  }

  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #6046B6;
  border: 5px solid #cecdcd;
  top: 30%;
  left: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`
 
const MenuSubtitle=styled.h4`
position: absolute;
  &:hover{
    color: #FFE745
  }
color: white;
top: 68%;
left: 37%;
  font-weight: 700;
`

const MenuParent=styled.div`
margin: 20px 0;
`
const BestAtmosDiv=styled.div`
display: flex;
justify-content: end;
margin: 70px 0;
background-size: cover;
width: 100%;
height: 500px;
background-image: url(${BestAtmosImg});
  background-position: bottom;
  overflow: hidden;
  position: relative;
`
const BestAtmosTitle=styled.h1`
font-family: 'Times New Roman', Times, serif;
font-weight: 500;
font-size: 65px;
  color: #fff
`
const BestAtmosBtn=styled.button`
&:hover{
  background-color: #FFE745;
  color: #000;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}
  background-color: lightseagreen;
  color: #fff;
  height: 75px;
width: 250px;
border: none;
margin: 20px 0;
letter-spacing: 1px;
font-size: 14px;
font-weight: 500;
`
const Line=styled.span`
display: inline-block;
margin-left: 0px;
margin: 7px 0;
width: 60px;
height: 4px;
background-color: #FFE745;
`
const BestAtmosPersonSubt=styled.h4`
display: inline-block;
margin: 10px 20px;
  font-size: 18px;
color: #777;
`
const PizzasTitle=styled.h1`
font-size: 70px;
letter-spacing: 3px;
text-align: center;
font-family: 'Times New Roman', Times, serif;
`

const BgBlack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
`




export {Container, Wrapper, Button, LogoWrapper,PizzasTitle,ImgDiv,Line,BestAtmosBtn,BestAtmosPersonSubt, LogoWrapperBefore,CartIcon,BestAtmosTitle,MenuIconDiv,MenuSubtitle,BestAtmosDiv, CartItems,OurMenuTitle,MenuChild,MenuParent,All, ImgWrapper, BgBlack}
