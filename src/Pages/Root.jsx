import React, {useEffect} from 'react';
import {
    All,
} from "../style";
import { useDispatch} from 'react-redux';
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
import Interval from "../components/Interval";
import SaladsDiscount from "../components/SaladsDiscount";
import SelectedPizzas from "../components/SelectedPizzas";
import OrderTable from "../components/OrderTable"
import Menu from "../components/Menu";
import SwiperSlideCom  from "../components/swiper comp/SwiperSlideCom"
import Slider from "../components/Slider"





function Root() {

    useEffect(() => {
      AOS.init({
        duration:1000
    });
    }, [])

    const dispatch=useDispatch()


    const axios = require('axios').default;
    useEffect(() => {
      
        axios.get('http://myjson.dit.upm.es/api/bins/842i')
        .then(function (response) {
          dispatch({type:"ALL_DATA",payload:response.data})
        })
        .catch(function (error) {
          console.log(error);
        });    
      
    }, [])
    

    return (
        <All>
            <Slider />
            <Menu />
            <Interval />
            <SelectedPizzas />
            <SaladsDiscount />
            <SwiperSlideCom/>
            <OrderTable />
        </All>
    )
}

export default Root;