import React, {useState} from 'react';
import {Container, Wrapper, Button, LogoWrapper, LogoWrapperBefore,BestAtmosTitle,MenuIconDiv,BestAtmosDiv,ImgDiv,CartIcon,MenuSubtitle, CartItems,All,OurMenuTitle,MenuChild,MenuContainer,MenuParent, ImgWrapper} from "./style";
import Logo from "../assets/images/logo-198x66.png"
import Menu1 from "../assets/images/menu-1-370x278.jpg"
import Menu2 from "../assets/images/menu-2-370x278.jpg"
import Menu3 from "../assets/images/menu-3-370x278.jpg"
import Menu4 from "../assets/images/menu-4-370x278.jpg"
import Menu5 from "../assets/images/menu-5-370x278.jpg"
import Menu6 from "../assets/images/menu-6-370x278.jpg"
import {TbLeaf} from "react-icons/tb";
import {GiHamburger} from "react-icons/gi";
import {IoFish,IoPizzaOutline} from "react-icons/io5";
import {FaIceCream} from "react-icons/fa";
import {BiDrink} from "react-icons/bi";
import {Link} from "react-router-dom";

function Index() {
    const [active, setActive] = useState("about")
    const [show, setShow] = useState(false)

    return (
        <All>
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

            <div className='container my-5'>
                <OurMenuTitle>OUR MENU</OurMenuTitle>
                <MenuParent className="row">
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper>
                                <img src={Menu1} alt="menu-1" />
                            </ImgWrapper>
                            <MenuIconDiv><TbLeaf style={{fontSize:"60px",color:"white"}}/>
                            </MenuIconDiv>
                            <MenuSubtitle>Salads</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper>
                                <img src={Menu2} alt="menu-2" />
                            </ImgWrapper>
                            <MenuIconDiv><IoPizzaOutline style={{fontSize:"60px",color:"white"}}/></MenuIconDiv>
                            <MenuSubtitle>Pizzas</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper>
                                <img src={Menu3} alt="menu-3" />
                            </ImgWrapper>
                            <MenuIconDiv><GiHamburger style={{fontSize:"60px",color:"white"}}/></MenuIconDiv>
                            <MenuSubtitle>Burgers</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper>
                                <img src={Menu4} alt="menu-4" />
                            </ImgWrapper>
                            <MenuIconDiv><FaIceCream style={{fontSize:"60px",color:"white"}}/></MenuIconDiv>
                            <MenuSubtitle>Desserts</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper>
                                <img src={Menu5} alt="menu-5" />
                            </ImgWrapper>
                            <MenuIconDiv><BiDrink style={{fontSize:"60px",color:"white"}}/></MenuIconDiv>
                            <MenuSubtitle>Drinks</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper>
                                <img src={Menu6} alt="menu-6" />
                            </ImgWrapper>
                            <MenuIconDiv><IoFish style={{fontSize:"60px",color:"white"}}/></MenuIconDiv>
                            <MenuSubtitle>Seafood</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                </MenuParent>

                <BestAtmosDiv className="row">
                    <div className="col-5">
                        <BestAtmosTitle>Best atmosphere</BestAtmosTitle>
                        <h3>PizzaHouse is the place of the best pizza and high-quality service.</h3>
                        <button></button>
                    </div>
                </BestAtmosDiv>
            </div>
        </All>
    );
}

export default Index;