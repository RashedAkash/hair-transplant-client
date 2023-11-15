import React from 'react';
import Banner from '../../component/Banner/Banner';
import Faq from '../../component/Faq/Faq';
import Counter from '../../component/Counter/Counter';
import Testimonial from '../../component/Testimonial/Testimonial';
import Partners from '../../component/Partners/Partners';

const Home = () => {
  return (
    <div>
      <Banner />
      <Faq />
      <Testimonial />
      <Counter />
      <Partners />
    </div>
  );
};

export default Home;