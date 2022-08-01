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
font-weight: 300;
`
const MenuChild=styled.div`
margin: 30px 0;
`

const ImgDiv=styled.div`
position: relative;
`

const ImgWrapper=styled.div`
opacity: 0.8;
filter: brightness(0.7);
  width: 100%;
  height: 100%;
`

const MenuIconDiv=styled.div`
&:hover{
  background-color: #FFE745;
}
position: absolute;
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #6046B6;
border: 5px solid whitesmoke;
top: 30%;
left: 35%;
display: flex;
align-items: center;
justify-content: center;
`
 
const MenuSubtitle=styled.h4`
position: absolute;
color: white;
top: 68%;
left: 37%;
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
height: 100%;
background-image: url(${BestAtmosImg});
`
const BestAtmosTitle=styled.h1`
font-family: 'Times New Roman', Times, serif;
font-weight: 500;
font-size: 70px;
`
const BestAtmosBtn=styled.button`
&:hover{
  background-color: lightseagreen;
  color: white;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}
height: 75px;
width: 250px;
border: none;
background-color: #FFE745;
margin: 20px 0;
letter-spacing: 1px;
font-size: 18px;
font-weight: 500;
`
const Line=styled.span`
display: inline-block;
margin-left: 0px;
margin: 7px 0;
width: 60px;
height: 4px;
background-color: #6046B6;
`
const BestAtmosPersonSubt=styled.h4`
display: inline-block;
margin: 10px 20px;
color: #777;
`
const PizzasTitle=styled.h1`
font-size: 70px;
letter-spacing: 3px;
text-align: center;
font-family: 'Times New Roman', Times, serif;
`



<<<<<<< HEAD
export {Container, Wrapper, Button, LogoWrapper,ImgDiv, LogoWrapperBefore,CartIcon,BestAtmosTitle,MenuIconDiv,MenuSubtitle,BestAtmosDiv, CartItems,OurMenuTitle,MenuChild,MenuParent,All, ImgWrapper}
=======
export {Container, Wrapper, Button, LogoWrapper,PizzasTitle,ImgDiv,Line,BestAtmosBtn,BestAtmosPersonSubt, LogoWrapperBefore,CartIcon,BestAtmosTitle,MenuIconDiv,MenuSubtitle,BestAtmosDiv, CartItems,OurMenuTitle,MenuChild,MenuParent,All}
>>>>>>> 590782b2451dbac759c3cffbd4bb2f559b583c68
