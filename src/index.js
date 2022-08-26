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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <Provider store={store}>
            <BrowserRouter>
            <Routes>
            <Route path={"/"} element={<App/>}></Route>
            <Route path={"/more/:id"} element={<More/>}></Route>
            </Routes>
            </BrowserRouter>
            </Provider>
);


