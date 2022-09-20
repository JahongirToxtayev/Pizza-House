import React, {useEffect} from 'react';
import {
    All,
    SliderContainer,
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
import Navbar from "../components/Navbar";
import Slider from "../components/Slider"
import Footer from "../components/Footer";





function Root() {

    useEffect(() => {
      AOS.init({
        duration:1000
    });
    }, [])

    const dispatch=useDispatch()


    const axios = require('axios').default;
    useEffect(() => {
      
        axios.get('https://myjson.dit.upm.es/api/bins/aovm')
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
            <OrderTable />
        </All>
    )
}

export default Root;