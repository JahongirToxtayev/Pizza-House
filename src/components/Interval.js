import React from 'react';
import {BestAtmosBtn, BestAtmosDiv, BestAtmosPersonSubt, BestAtmosTitle, BgBlack, Line} from "../style";

function Interval() {
    return (
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
                <BestAtmosBtn><b>VIEW OUR SERVICES</b></BestAtmosBtn>
            </div>
        </BestAtmosDiv>
    );
}

export default Interval;