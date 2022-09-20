import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import More from "./components/More/more";
import Burgers from "./components/Menu/Burgers";
import Salads from "./components/Menu/Salads";
import Pizzas from "./components/Menu/Pizzas";
import SeaFoods from "./components/Menu/SeaFoods";
import Desserts from "./components/Menu/Desserts";
import Drinks from "./components/Menu/Drinks";
import React from "react";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Root from "./Pages/Root.jsx";


function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<Root/>}/>
            <Route path={"/about"} element={<About />}/>
            <Route path={"/contact"} element={<Contact />}/>
            <Route path={"/more/:id"} element={<More/>}/>
            <Route path='/burgers' element={<Burgers/>} />
            <Route path='/salads' element={<Salads/>} />
            <Route path='/pizzas' element={<Pizzas/>} />
            <Route path='/seafoods' element={<SeaFoods/>} />
            <Route path='/desserts' element={<Desserts/>} />
            <Route path='/drinks' element={<Drinks/>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
