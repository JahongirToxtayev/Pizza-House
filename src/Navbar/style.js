import styled from "styled-components"
import {Cart} from "@styled-icons/bootstrap/Cart"
import Logo from "../assets/images/logo-198x66.png"


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
  z-index: -2;
  overflow: hidden;
  height: 70px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
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
`

const Button = styled.button`
    border: none;
    outline: none;
    font-weight: bold;
    background-color: transparent;
    margin: 0 10px;
    font-size: 18px;
    line-height: 1.34;
`

const CartIcon = styled(Cart)`
    width: 30px;
    height: 30px;
    color: #6046B6;
`



export {Container, Wrapper, Button, LogoWrapper, LogoWrapperBefore, CartIcon}