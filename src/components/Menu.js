import React from 'react';
import {ImgDiv, ImgWrapper, MenuChild, MenuIconDiv, MenuParent, MenuSubtitle, OurMenuTitle} from "../style";
import Menu1 from "../assets/images/menu-1-370x278.jpg";
import {Link} from "react-router-dom";
import {TbLeaf} from "react-icons/tb";
import Menu2 from "../assets/images/menu-2-370x278.jpg";
import {IoFish, IoPizzaOutline} from "react-icons/io5";
import Menu3 from "../assets/images/menu-3-370x278.jpg";
import {GiHamburger} from "react-icons/gi";
import Menu4 from "../assets/images/menu-4-370x278.jpg";
import {FaIceCream} from "react-icons/fa";
import Menu5 from "../assets/images/menu-5-370x278.jpg";
import {BiDrink} from "react-icons/bi";
import Menu6 from "../assets/images/menu-6-370x278.jpg";

function Menu() {
    return (
        <div className='full-width container my-5'>
            <div className="center">
                <OurMenuTitle>OUR MENU</OurMenuTitle>
                <MenuParent className="row">
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu1} alt="menu-1"/>
                            </ImgWrapper>
                            <Link to={"/salads"}>
                                <MenuIconDiv className="icon-wrapper"><TbLeaf className="icon"/>
                                </MenuIconDiv>
                            </Link>
                            <MenuSubtitle>Salads</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu2} alt="menu-2"/>
                            </ImgWrapper>
                            <Link to={"/pizzas"}>
                                <MenuIconDiv className="icon-wrapper"><IoPizzaOutline className="icon"/></MenuIconDiv>
                            </Link>
                            <MenuSubtitle>Pizzas</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu3} alt="menu-3"/>
                            </ImgWrapper>
                            <Link to={"/burgers"}>
                                <MenuIconDiv className="icon-wrapper"><GiHamburger className="icon"/></MenuIconDiv>
                            </Link>
                            <MenuSubtitle>Burgers</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu4} alt="menu-4"/>
                            </ImgWrapper>
                            <Link to={"/desserts"}>
                                <MenuIconDiv className="icon-wrapper"><FaIceCream className="icon"/></MenuIconDiv>
                            </Link>
                            <MenuSubtitle>Desserts</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu5} alt="menu-5"/>
                            </ImgWrapper>
                            <Link to={"/drinks"}>
                                <MenuIconDiv className="icon-wrapper"><BiDrink className="icon"/></MenuIconDiv>
                            </Link>
                            <MenuSubtitle>Drinks</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu6} alt="menu-6"/>
                            </ImgWrapper>
                            <Link to={"/seafoods"}>
                                <MenuIconDiv className="icon-wrapper"><IoFish className="icon"/></MenuIconDiv>
                            </Link>
                            <MenuSubtitle>Sea Foods</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                </MenuParent>
            </div>
        </div>

    );
}

export default Menu;