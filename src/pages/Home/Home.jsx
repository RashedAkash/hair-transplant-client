import React from 'react';
import Banner from '../../component/Banner/Banner';
import Faq from '../../component/Faq/Faq';
import Counter from '../../component/Counter/Counter';
import Testimonial from '../../component/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner />
      <Faq />
      <Testimonial />
      <Counter />
    </div>
  );
};

export default Home;