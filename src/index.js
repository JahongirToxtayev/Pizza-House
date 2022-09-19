import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes, Route} from "react-router-dom";
import More from "./components/More/more"
import {BrowserRouter} from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import store from './Redux/store';
import { Provider } from 'react-redux';
import Burgers from "./components/Menu/Burgers";
import Desserts from "./components/Menu/Desserts";
import Drinks from "./components/Menu/Drinks";
import Pizzas from "./components/Menu/Pizzas";
import Salads from "./components/Menu/Salads";
import SeaFoods from "./components/Menu/SeaFoods";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <Provider store={store}>
    <BrowserRouter>
            <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/more/:id"} element={<More/>}/>
            <Route path='/burgers' element={<Burgers/>} />
            <Route path='/salads' element={<Salads/>} />
            <Route path='/pizzas' element={<Pizzas/>} />
            <Route path='/seafoods' element={<SeaFoods/>} />
            <Route path='/desserts' element={<Desserts/>} />
            <Route path='/drinks' element={<Drinks/>} />

            </Routes>
            </BrowserRouter>
            </Provider>
);


