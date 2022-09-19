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
    BetweenReverseCard,
    MoreBtn,
    LikeBtn,
    PurchaseDiv,
    PurchaseBtn,
    BgOpacity,
    BookTable,
    BookInputDiv,
    TextAreaDiv
} from "./style";
import Logo from "../assets/images/logo-198x66.png"
import Menu1 from "../assets/images/menu-1-370x278.jpg"
import Menu2 from "../assets/images/menu-2-370x278.jpg"
import Menu3 from "../assets/images/menu-3-370x278.jpg"
import Menu4 from "../assets/images/menu-4-370x278.jpg"
import Menu5 from "../assets/images/menu-5-370x278.jpg"
import Menu6 from "../assets/images/menu-6-370x278.jpg"
import {TbLeaf} from "react-icons/tb";
import {GiHamburger} from "react-icons/gi";
import {IoFish, IoPizzaOutline} from "react-icons/io5";
import {FaIceCream} from "react-icons/fa";
import {BiDrink} from "react-icons/bi";
import {Link} from "react-router-dom";
import {AiOutlineHeart,AiFillHeart, AiFillStar, AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import SaladsBackImg from "../assets/images/bg-4.jpg"
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
import {Input,Spacer,Grid,Textarea} from "@nextui-org/react"



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
    const [Purchase, setPurchase] = useState()

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
          dispatch({type:"ALL_DATA",payload:response.data})
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
                    let slideClass = slideIndex === index ? "activeSlide" : "nonActiveSlide"
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
                {(source.length>0)&&source.map((v,i)=>{
                    return <div className="col-3" key={i} >
                        <PizzaCard className="card mx-2 my-3 shadow pb-2"  data-aos={"zoom-in-left"}>
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
                                <BetweenReverseCard className='mx-3'>
                                    <LikeBtn><AiOutlineHeart/></LikeBtn>
                                    <Link to={`/more/${v.id}`}><MoreBtn>More <AiOutlineArrowRight/></MoreBtn></Link>
                                </BetweenReverseCard>
                            </div>
                            {(Purchase)&&<PurchaseDiv>
                                <BgOpacity/>
                                <PurchaseBtn>Purchase</PurchaseBtn>
                            </PurchaseDiv>}
                        </PizzaCard>
                    </div>
                })}
            </div>
        </div>
        <BestAtmosDiv className="row" style={{backgroundImage:`url(${SaladsBackImg})`}}>
            <BgBlack/>
            <div className="col-5" style={{
                zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"
            }}>
                <BestAtmosTitle>-30% on all salads & drinks</BestAtmosTitle>
                <div style={{display: "flex", alignItems: "center"}}><Line style={{backgroundColor:"#6046B6"}}></Line><BestAtmosPersonSubt>Taste some of the best PizzaHouse salads!</BestAtmosPersonSubt></div>
                <BestAtmosBtn style={{backgroundColor:"#FFE745",color:"#111",fontWeight:"600"}}>CONTACT US</BestAtmosBtn>
            </div>
        </BestAtmosDiv>

        <div className="container">
            <PizzasTitle>BOOK YOUR TABLE</PizzasTitle>
            <BookTable className="shadow p-4">
                <Grid.Container gap={2} justify="center">
                    <Grid xs={5}>
                        <Input clearable bordered Placeholder="Name" size='xl' />
                    </Grid>
                    <Grid xs={4}>
                        <Input clearable bordered Placeholder="Name" size='xl' />
                    </Grid>
                    <Grid xs={4}>
                        <Input clearable bordered Placeholder="Name" size='xl' />
                    </Grid>
                </Grid.Container>

            </BookTable>

        </div>
            <BestAtmosDiv className="row" style={{backgroundImage:`url(${SaladsBackImg})`}}>
                <BgBlack/>
                <div className="col-5" style={{
                    zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"
                }}>
                    <BestAtmosTitle>-30% on all salads & drinks</BestAtmosTitle>
                    <div style={{display: "flex", alignItems: "center"}}><Line style={{backgroundColor:"#6046B6"}}></Line><BestAtmosPersonSubt>Taste some of the best PizzaHouse salads!</BestAtmosPersonSubt></div>
                    <SlideBtn>CONTACT US</SlideBtn>
                </div>
            </BestAtmosDiv>

                <div className="container">
                <PizzasTitle>BOOK YOUR TABLE</PizzasTitle>
                <BookTable className="shadow pt-5 p-3 my-2">
                <BookInputDiv>
        <Input
        clearable
          bordered
          animated={true}
          labelPlaceholder="Your Name"
          color="secondary"
          size='xl'
          width='46%'
          height='50px'
        />
     
        <Input
        clearable
          bordered
          animated={true}
          labelPlaceholder="Your Gmail"
          labelRight="@gmail.com"
          color="secondary"
          size='xl'
          width='46%'
        />
    
                </BookInputDiv>
                <TextAreaDiv>
                <Textarea
          bordered
          color="secondary"
          labelPlaceholder="Message"
          animated={true}
          width="100%"
          minRows={7}
          size='xl'
        />
                </TextAreaDiv>
                <div className="row px-4">
                    <div className="col-3">
                <SlideBtn>SEND MESSAGE</SlideBtn>
                    </div>
                    <div className="col-7">
                    <h3 className='text-center text-secondary mt-3'>Please reserve your table at least 1 day in advance.</h3>
                    </div>
                </div>
                </BookTable>
                </div>


        </All>)
}

export default Index;