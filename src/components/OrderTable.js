import React from 'react';
import {BookInputDiv, PizzasTitle, SlideBtn, TextAreaDiv, BookTable} from "../style";
import {Input, Textarea} from "@nextui-org/react";


function OrderTable() {
    return (
        <div className="container full-width">
            <div className="center my-5">
                <PizzasTitle>BOOK YOUR TABLE</PizzasTitle>
                <BookTable className="shadow pt-5 p-3 my-2">
                    <BookInputDiv>
                        <Input
                            clearable
                            bordered
                            animated={true}
                            labelPlaceholder="Your Name"
                            color="secondary"
                            size='xl'
                            width='46%'
                            height='50px'
                        />

                        <Input
                            clearable
                            bordered
                            animated={true}
                            labelPlaceholder="Your Gmail"
                            labelRight="@gmail.com"
                            color="secondary"
                            size='xl'
                            width='46%'
                        />

                    </BookInputDiv>
                    <TextAreaDiv>
                        <Textarea
                            bordered
                            color="secondary"
                            labelPlaceholder="Message"
                            animated={true}
                            width="100%"
                            minRows={7}
                            size='xl'
                        />
                    </TextAreaDiv>
                    <div className="row px-4">
                        <div className="col-3">
                            <SlideBtn>SEND MESSAGE</SlideBtn>
                        </div>
                        <div className="col-7">
                            <h3 className='text-center text-secondary mt-3'>Please reserve your table at least 1 day in advance.</h3>
                        </div>
                    </div>
                </BookTable>
            </div>
        </div>
    );
}

export default OrderTable;