import React from 'react';

const SectionTitle = ({title,subTitle}) => {
  return (
    <div>
      <div className=' relative text-center'>
        <h1 className=' text-[#2c4964] font-bold text-4xl pb-3 mb-4 border-b inline-block'>{title}</h1>
        <span className=' absolute bg-gradient-to-r	from-cyan-500 to-blue-500 w-16 bottom-4 left-0 right-0 mx-auto h-1'></span>
      </div>
      <p className=' text-center'>{subTitle }</p>
    </div>
  );
};

export default SectionTitle;