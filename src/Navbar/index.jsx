import React, {useState, useEffect} from 'react';
import {
    Container,
    Wrapper,
    Button,
    LogoWrapper,
    Line,
    PizzasTitle,
    LogoWrapperBefore,
    BestAtmosPersonSubt,
    BestAtmosBtn,
    BestAtmosTitle,
    MenuIconDiv,
    BestAtmosDiv,
    ImgDiv,
    CartIcon,
    MenuSubtitle,
    CartItems,
    All,
    OurMenuTitle,
    MenuChild,
    MenuContainer,
    MenuParent,
    ImgWrapper,
    BgBlack,
    SliderContainer,
    Slide,
    SlideBtn,
    LeftArrow,
    RightArrow,
    PizzaImg,
    PizzaCard,
    BetweenReverseCard
} from "./style";
import Logo from "../assets/images/logo-198x66.png"
import Menu1 from "../assets/images/menu-1-370x278.jpg"
import Menu2 from "../assets/images/menu-2-370x278.jpg"
import Menu3 from "../assets/images/menu-3-370x278.jpg"
import Menu4 from "../assets/images/menu-4-370x278.jpg"
import Menu5 from "../assets/images/menu-5-370x278.jpg"
import Menu6 from "../assets/images/menu-6-370x278.jpg"
import SliderImg1 from "../assets/images/slide-1-1920x753.jpeg"
import SliderImg2 from "../assets/images/slide-2-1920x753.jpeg"
import {TbLeaf} from "react-icons/tb";
import {GiHamburger} from "react-icons/gi";
import {IoFish, IoPizzaOutline} from "react-icons/io5";
import {FaIceCream} from "react-icons/fa";
import {BiDrink} from "react-icons/bi";
import {Link} from "react-router-dom";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {ArrowLeft} from "@styled-icons/bootstrap/ArrowLeft"
import {ArrowRight} from "@styled-icons/bootstrap/ArrowRight"
import {AiOutlineHeart,AiFillHeart, AiFillStar, AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
const data = [{id: 1, title: "PERFECT PIZZA", info: "Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants!"},
    {id: 2, title: "NICE INGREDIENTS", info: "We use only the best ingredients to make one-of-a-kind pizzas for our customers."},
    {id: 3,  title: "FAST DELIVERY", info: "Enjoy the fast delivery. Feel yourself to eat fresh meal like in onsite"}]


function Index() {

    useEffect(() => {
      AOS.init({
        duration:1000
    });
    }, [])

    const [active, setActive] = useState("home")
    const [show, setShow] = useState(false)
    const [slides, setSlides] = useState(data)
    const [index, setIndex] = useState(0)

    const prevSlide = () => {
        setIndex(oldIndex => {
            let index = oldIndex - 1
            if (index < 0) {
                index = slides.length - 1
            }
            return index
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(oldIndex => {
                let index = oldIndex + 1
                if (index > slides.length - 1) {
                    index = 0
                }
                return index
            })
        }, 3000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    const nextSlide = () => {
        setIndex(oldIndex => {
            let index = oldIndex + 1
            if (index > slides.length - 1) {
                index = 0
            }
            return index
        })
    }

    const source =useSelector(state=>state)
    console.log(source,"keldim");





    const dispatch=useDispatch()


    const axios = require('axios').default;
    useEffect(() => {
        
        axios.get('http://myjson.dit.upm.es/api/bins/aovm')
          .then(function (response) {
            const action={type:"ALL_DATA",payload:response.data}
            dispatch(action)
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [])
    

    return (<All>
            <Container>
                <LogoWrapper>
                    <img style={{marginRight: "100px", maxHeight: "240px"}} src={Logo} alt=""/>
                    <LogoWrapperBefore/>
                </LogoWrapper>
                <Wrapper>
                    <Link to="/">
                        <Button borderBottom={active === "home" && true} onClick={() => setActive("home")}>Home</Button>
                    </Link>
                    <Link to="/">
                        <Button borderBottom={active === "about" && true} onClick={() => setActive("about")}>About
                            us</Button>
                    </Link>
                    <Link to="/">
                        <Button borderBottom={active === "contacts" && true}
                                onClick={() => setActive("contacts")}>Contact</Button>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <CartIcon/>
                    {show && <CartItems>12</CartItems>}
                </Wrapper>
            </Container>

            <SliderContainer>
                {slides.map((slide, slideIndex) => {
                    const {id, title, info} = slide
                    let position = "nextSlide"
                    if (slideIndex === index) {
                        position = "activeSlide"
                    }
                    if (slideIndex === index - 1 || (index === 0 && slideIndex === slides.length - 1)) {
                        position = "lastSlide"
                    }
                    return <Slide  className={`slide ${position}`} key={id} bg={id}>
                        <h1 style={{width: "50%", fontWeight: "400", fontSize: "130px", color: `${id === 3 ? "#FFE745" : "#fff"}`, margin: "30px 0 20px"}}>{title}</h1>
                        <h3 style={{fontWeight: "400", fontSize: "20px", lineHeight: "1.55", color: "#fff", width: "40%"}}>{info}</h3>
                        <SlideBtn style={{margin: "30px 0"}}>VIEW OUR SERVICES</SlideBtn>
                    </Slide>
                })}
                <LeftArrow onClick={prevSlide}><AiOutlineArrowLeft style={{color: "#fff", fontWeight: "bold", fontSize: "30px", width: "30px"}} /></LeftArrow>
                <RightArrow onClick={nextSlide}><AiOutlineArrowRight style={{color: "#fff", fontWeight: "bold", fontSize: "30px", width: "30px"}} /></RightArrow>
            </SliderContainer>

            <div className='container my-5'>
                <OurMenuTitle>OUR MENU</OurMenuTitle>
                <MenuParent className="row">
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu1} alt="menu-1"/>
                            </ImgWrapper>
                            <MenuIconDiv className="icon-wrapper"><TbLeaf className="icon"/>
                            </MenuIconDiv>
                            <MenuSubtitle>Salads</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu2} alt="menu-2"/>
                            </ImgWrapper>
                            <MenuIconDiv className="icon-wrapper"><IoPizzaOutline className="icon"/></MenuIconDiv>
                            <MenuSubtitle>Pizzas</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu3} alt="menu-3"/>
                            </ImgWrapper>
                            <MenuIconDiv className="icon-wrapper"><GiHamburger className="icon"/></MenuIconDiv>
                            <MenuSubtitle>Burgers</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu4} alt="menu-4"/>
                            </ImgWrapper>
                            <MenuIconDiv className="icon-wrapper"><FaIceCream className="icon"/></MenuIconDiv>
                            <MenuSubtitle>Desserts</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu5} alt="menu-5"/>
                            </ImgWrapper>
                            <MenuIconDiv className="icon-wrapper"><BiDrink className="icon"/></MenuIconDiv>
                            <MenuSubtitle>Drinks</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                    <MenuChild className="col-4">
                        <ImgDiv>
                            <ImgWrapper className="img-wrapper">
                                <img className="img" src={Menu6} alt="menu-6"/>
                            </ImgWrapper>
                            <MenuIconDiv className="icon-wrapper"><IoFish className="icon"/></MenuIconDiv>
                            <MenuSubtitle>Seafood</MenuSubtitle>
                        </ImgDiv>
                    </MenuChild>
                </MenuParent>
            </div>

            <BestAtmosDiv className="row">
                <BgBlack/>
                <div className="col-5" style={{
                    zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"
                }}>
                    <BestAtmosTitle>Best atmosphere</BestAtmosTitle>
                    <h3 style={{color: "#fff", fontSize: "24px"}}>PizzaHouse is the place of the best pizza and
                        high-quality service.</h3>
                    <div style={{display: "flex", alignItems: "center"}}><Line></Line><BestAtmosPersonSubt>Ben Smith,
                        Founder</BestAtmosPersonSubt></div>
                    <BestAtmosBtn>VIEW OUR SERVICES</BestAtmosBtn>
                </div>
            </BestAtmosDiv>

            <div className='container'>
                <PizzasTitle>SELECTED PIZZAS</PizzasTitle>
                <div className="row">
                    {source.map((v,i)=>{
                        console.log(v);
                        return <div className="col-3" key={i} >
                            <PizzaCard className="card mx-2 my-3 shadow-lg pb-4" data-aos={"zoom-in-left"}>
                                <PizzaImg  src={`${v.Image}`} alt="" />
                                <div className="body-card">
                                <h4 className='text-center'>{v.Pizza}</h4>
                                <BetweenReverseCard className='mx-3'>
                                    <p>
                                        <span className='text-warning'><AiFillStar/></span>
                                        <span className='text-warning'><AiFillStar/></span>
                                        <span className={v.Cost>=9 ? "text-warning":"text-secondary"}><AiFillStar/></span>
                                        <span className={v.Cost>10 ? "text-warning":"text-secondary"}><AiFillStar/></span>
                                        <span className={v.Cost>12 ? "text-warning":"text-secondary"}><AiFillStar/></span>
                                    </p>
                                    <h5>{`${v.Cost} $`}</h5>
                                </BetweenReverseCard>
                                <BetweenReverseCard>
                                    <button><AiOutlineHeart/></button>
                                    <button>More</button>
                                </BetweenReverseCard>
                            </div>
                            </PizzaCard>
                            
                        </div>
                    })}
                </div>
            </div>
        </All>);
}

export default Index;