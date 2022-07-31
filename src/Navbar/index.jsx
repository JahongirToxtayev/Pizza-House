import React, {useState} from 'react';
import {Container, Wrapper, Button, LogoWrapper, LogoWrapperBefore, CartIcon, CartItems} from "./style";
import Logo from "../assets/images/logo-198x66.png"
import {Link} from "react-router-dom";

function Index() {
    const [active, setActive] = useState("about")
    const [show, setShow] = useState(false)

    return (
        <>
            <Container>
                <LogoWrapper>
                    <img style={{marginRight: "100px", maxHeight: "240px"}} src={Logo} alt=""/>
                    <LogoWrapperBefore />
                </LogoWrapper>
                <Wrapper>
                    <Link to="/">
                        <Button borderBottom={active === "home" && true} onClick={() => setActive("home")}>Home</Button>
                    </Link>
                    <Link to="/">
                        <Button borderBottom={active === "about" && true} onClick={() => setActive("about")}>About us</Button>
                    </Link>
                    <Link to="/">
                        <Button borderBottom={active === "contacts" && true} onClick={() => setActive("contacts")}>Contact</Button>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <CartIcon />
                    {show && <CartItems>12</CartItems>}
                </Wrapper>
            </Container>
        </>
    );
}

export default Index;