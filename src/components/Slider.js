import React from 'react';
import {LeftArrow, RightArrow, Slide, SlideBtn, SliderContainer} from "../style";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {useEffect, useState} from "react";

const data = [{id: 1, title: "PERFECT PIZZA", info: "Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants!"},
    {id: 2, title: "NICE INGREDIENTS", info: "We use only the best ingredients to make one-of-a-kind pizzas for our customers."},
    {id: 3,  title: "FAST DELIVERY", info: "Enjoy the fast delivery. Feel yourself to eat fresh meal like in onsite"}]


function Slider() {
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
    return (
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
    );
}

export default Slider;