import React from 'react';
import { Carousel } from "keep-react";
import reviewData from '../../../public/review.json'

import img from '../../assets/cot.png'
import SectionTitle from '../SectionTitle/SectionTitle';


const Testimonial = () => {
  return (
    <div>
      <SectionTitle title='Our Client Feedback' subTitle='The surgeon thoroughly explained the procedure, answered all my questions, and made me feel at ease before the surgery. The transplant itself was virtually painless, and the results have been remarkable. My hair looks natural.'></SectionTitle>
      
      <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel indicatorsType="ring" indicators={true}>
        {
                    reviewData.map(review => <div
                        key={review.name}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                        <img src={img} alt="" />
                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            <p className="py-4 text-center">"{review.description}"</p>
                            
                        </div>
                    </div>)
                }
      </Carousel>
    </div>
    </div>
  );
};

export default Testimonial;