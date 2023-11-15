import React from 'react';
import { Accordion } from "keep-react";
import SectionTitle from '../SectionTitle/SectionTitle';

const Faq = () => {
  return (
    <div className='py-10 '>
      <SectionTitle
        title='Frequently Asked Questions'
        subTitle='Some patients have lot of questions in their mind about hair transplant,we are ready to give answer for all your questions .so call us now and make your appointment .'></SectionTitle>
      <div className='py-10 '>
        <Accordion className=' bg-white' alwaysOpen={true}  iconPosition="left">
      <Accordion.Panel>
        <Accordion.Title className='bg-[#f1f7fd]'>
          What is the Cost of Hair Transplant In it?
        </Accordion.Title>
        <Accordion.Content>
          <p>
           Hair Transplant cost Dhaka in Bangladesh is dependent on many factors. These factors are related to the place where the clinic is situated and also upon the Baldness stage of a client. And even from clinic to clinic within the same city, location, or even premises, it might vary. But never forget, quality matters more than the cost! The hair transplant cost per graft in india ranges from Rs.20 to Rs.50 per graft. The doctor can tell you the exact cost only after the Proper consultation and scalp analysis, Doctors also tell you how much graft & total price range of graft required for your hair transplantation. The Hair Transplant cost in Dhaka is Between Rs.35000 to Rs.200000 . It Depends on the patient to patient and also on the above factors.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-[#f1f7fd]'>
          How does hair transplant work?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            During hair transplant procedure, hairs are first extracted from the regions of the head that show resistance to baldness. After that, these resistant strands are implanted on the bald patches seen on the scalp. The process works because hair taken from the areas with resistance to baldness will remain resistant to baldness wherever they are placed. Hair transplant gives natural and permanent results.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-[#f1f7fd]'>
          When can I go for hair transplant?
        </Accordion.Title>
        <Accordion.Content>
          <p>
          When you are suffering from a high rate of hair loss and your scalp has become visible, you can go for hair transplantation after consulting your hair transplant surgeon.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-[#f1f7fd]'>
          Is your technique different from other hair transplant centre?
        </Accordion.Title>
        <Accordion.Content>
          <p>
         We use the most technically advanced method of hair transplant. Instead of using the old punch graft or slit method technique, we perform hair transplant with the help of no touch and root by root techniques
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-[#f1f7fd]'>
          When will I see my full grown hairs?
        </Accordion.Title>
        <Accordion.Content>
          <p>
        1st Growth Phase: Right after the plantation of the grafts, hair will start growing. It will grow up to 1-2 cm in the first 4-6 weeks.
2nd Temporary Shedding Phase: transplanted hair will start falling, but roots will stay intact beneath the skin. This phase lasts for about 3 months. You need not to worry during this phase. Your transplanted hair will grow back soon and continue to grow throughout your life.
3rd Permanent Growth Phase: In this phase, all the fallen hair will grow back. The transplanted hair will have the same appearance as the natural hair and will keep growing for the rest of your life. You will able to see fully grown hair on your scalp in 6 to 9 month's. time.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
       </div>
    </div>
  );
};

export default Faq;