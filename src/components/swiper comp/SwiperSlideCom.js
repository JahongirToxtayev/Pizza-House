import React from 'react'
import { PizzasTitle } from '../../style';
import styled from "styled-components"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination,Autoplay} from "swiper";


const SwiperCard=styled.div`
transition: all 0.5s ease;
border: none;
width: 100%;
display: block;
padding: 20px;
height: 100%;
`
const SwiperImgDiv=styled.div`
margin: 30px;
display: flex;
align-items: center;
justify-content: center;
`
const SwiperImg=styled.img`
transition: all 0.5s ease;
height: 200px;
width: 200px;
object-fit: cover;
border-radius: 50%;
`


const SwiperSlideCom = () => {
  return (
    <>
    <div className="container full-width swiper-parent_div">
            <div className="center">
            <PizzasTitle>WHAT PEOPLE SAY</PizzasTitle>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper swiper"
      >
        <SwiperSlide className='swiper-slide'>
          <SwiperCard className="card shadow">
            <SwiperImgDiv>
          <SwiperImg src="https://www.seekpng.com/png/detail/803-8038944_happy-person-png-tecnologia-de-la-felicidad.png" />
            </SwiperImgDiv>
            <div className="body-card">
                <h4 className='text-center'>Lucy Clerk</h4>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi reiciendis voluptates dicta consectetur nihil hic labore ut ea quo.</p>
            </div>
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <SwiperCard className="card shadow">
            <SwiperImgDiv>
          <SwiperImg src="https://thumbs.dreamstime.com/b/%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B5-%D0%B8-41760534.jpg" />
            </SwiperImgDiv>
            <div className="body-card">
                <h4 className='text-center'>Linda James</h4>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi reiciendis voluptates dicta consectetur nihil hic labore ut ea quo.</p>
            </div>
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <SwiperCard className="card shadow">
            <SwiperImgDiv>
          <SwiperImg src="https://massovki.net/pic/10045993.jpg" />
            </SwiperImgDiv>
            <div className="body-card">
                <h4 className='text-center'>Jack Raymon</h4>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi reiciendis voluptates dicta consectetur nihil hic labore ut ea quo.</p>
            </div>
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <SwiperCard className="card shadow">
            <SwiperImgDiv>
          <SwiperImg src="https://bilder.jtl-software.de/servicepartner/362_ansprechpartner.png" />
            </SwiperImgDiv>
            <div className="body-card">
                <h4 className='text-center'>Jacob Michael</h4>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi reiciendis voluptates dicta consectetur nihil hic labore ut ea quo.</p>
            </div>
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <SwiperCard className="card shadow">
            <SwiperImgDiv>
          <SwiperImg src="https://avatars.mds.yandex.net/i?id=be03d5ca9465f8cf32b4172eb272182c_l-5876666-images-thumbs&ref=rim&n=13&w=1080&h=720" />
            </SwiperImgDiv>
            <div className="body-card">
                <h4 className='text-center'>Arshi Ahmed</h4>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi reiciendis voluptates dicta consectetur nihil hic labore ut ea quo.</p>
            </div>
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <SwiperCard className="card shadow">
            <SwiperImgDiv>
          <SwiperImg src="https://www.local-business.co.uk/wp-content/uploads/2018/05/1111.jpg" />
            </SwiperImgDiv>
            <div className="body-card">
                <h4 className='text-center'>Alexander Joseph</h4>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi reiciendis voluptates dicta consectetur nihil hic labore ut ea quo.</p>
            </div>
          </SwiperCard>
        </SwiperSlide>
      </Swiper>
            </div>
            </div>

    </>
  )
}

export default SwiperSlideCom