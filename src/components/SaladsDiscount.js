import React from 'react';
import SaladsBackImg from "../assets/images/bg-4.jpg";
import {BestAtmosDiv, BestAtmosPersonSubt, BestAtmosTitle, BgBlack, Line, SlideBtn} from "../style";

function SaladsDiscount() {
    return (
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
    );
}

export default SaladsDiscount;