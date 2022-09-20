import React from 'react';
import {
    BetweenReverseCard,
    BgOpacity,
    LikeBtn,
    MoreBtn,
    PizzaCard,
    PizzaImg,
    PizzasTitle, PurchaseBtn,
    PurchaseDiv
} from "../style";
import {AiFillStar, AiOutlineArrowRight, AiOutlineHeart} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function SelectedPizzas(props) {
    const [Purchase, setPurchase] = useState()
    const source =useSelector(state=>state)


    return (
        <div className='container full-width'>
            <div className="center">
                <PizzasTitle>SELECTED PIZZAS</PizzasTitle>
                <div className="row">
                    {(source.length>0)&&source.slice(0,4).map((v,i)=>{
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
        </div>
    );
}

export default SelectedPizzas;