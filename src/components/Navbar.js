import React from 'react';
import {Button, CartIcon, CartItems, Container, LogoWrapper, LogoWrapperBefore, Wrapper} from "../style";
import Logo from "../assets/images/logo-198x66.png";
import {Link} from "react-router-dom";
import {useState} from "react";

function Navbar() {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState("home")
    return (
        <>
            <div style={{height: "80px", width: "100vw"}}></div>
            <Container>
                <LogoWrapper>
                    <img style={{marginRight: "100px", maxHeight: "240px"}} src={Logo} alt=""/>
                    <LogoWrapperBefore/>
                </LogoWrapper>
                <Wrapper>
                    <Link to="/">
                        <Button borderBottom={active === "home" && true} onClick={() => setActive("home")}>Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button borderBottom={active === "about" && true} onClick={() => setActive("about")}>About
                            us</Button>
                    </Link>
                    <Link to="/contact">
                        <Button borderBottom={active === "contact" && true}
                                onClick={() => setActive("contact")}>Contact</Button>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <CartIcon/>
                    {show && <CartItems>12</CartItems>}
                </Wrapper>
            </Container>
        </>
    );
}

export default Navbar;