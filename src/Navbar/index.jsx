import React from 'react';
import {Container, Wrapper, Button, LogoWrapper, LogoWrapperBefore, CartIcon} from "./style";
import Logo from "../assets/images/logo-198x66.png"

function Index(props) {
    return (
        <>
            <Container>
                <LogoWrapper>
                    <img style={{marginRight: "100px", maxHeight: "240px"}} src={Logo} alt=""/>
                    <LogoWrapperBefore />
                </LogoWrapper>
                <Wrapper>
                    <Button>Home</Button>
                    <Button>About us</Button>
                    <Button>Contact</Button>
                </Wrapper>
                <CartIcon />
            </Container>
        </>
    );
}

export default Index;