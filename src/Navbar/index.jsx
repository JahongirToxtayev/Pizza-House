import React, {useState} from 'react';
import {Container, Wrapper, Button, LogoWrapper, LogoWrapperBefore, CartIcon, CartItems,MenuChild,MenuParent} from "./style";
import Logo from "../assets/images/logo-198x66.png"
import {Link} from "react-router-dom";
import Menu1 from "../assets/images/menu-1-370x278.jpg"
import Menu2 from "../assets/images/menu-2-370x278.jpg"
import Menu3 from "../assets/images/menu-3-370x278.jpg"

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
                        <Button borderB={active === "home" && true} onClick={() => setActive("home")}>Home</Button>
                    </Link>
                    <Link to="/">
                        <Button borderB={active === "about" && true} onClick={() => setActive("about")}>About us</Button>
                    </Link>
                    <Link to="/">
                        <Button borderB={active === "contacts" && true} onClick={() => setActive("contacts")}>Contact</Button>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <CartIcon />
                    {show && <CartItems>12</CartItems>}
                </Wrapper>
            </Container>
            {/*<div className='container'>*/}
            {/*        <div className="row">*/}
            {/*        <MenuChild className='col-4'>*/}
            {/*            <img src={Menu1} alt="menu-1" />*/}
            {/*            </MenuChild>*/}
            {/*        <MenuChild className='col-4'>*/}
            {/*            <img src={Menu2} alt="menu-2" />*/}
            {/*            </MenuChild>*/}
            {/*        <MenuChild className='col-4'>*/}
            {/*            <img src={Menu3} alt="menu-3" />*/}
            {/*            </MenuChild>*/}
            {/*        </div>*/}
            {/*    </div>*/}
        </>
    );
}

export default Index;