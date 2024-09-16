import React from 'react';
import FadeImages from './FadeImages';
import image from '../images/bg1.jpg'

const LayoutScroll = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center lg:items-start h-screen relative mt-16 lg:mt-32'>
      <div className='w-[80%]  lg:w-[40%] p-6'>
        <div className='sticky top-6 lg:top-auto lg:bottom-6'>
          <h1 className='text-[32px] md:text-[36px] lg:text-[42px] font-bold text-red-500 text-center lg:text-left'>Make a Difference Today</h1>
          <p className='text-base md:text-lg text-justify mt-5'>
            For the past five years, Help human rights has been dedicated to improving the lives of those in need. Our mission spans across multiple departments, from providing essential resources to underserved communities to supporting education, healthcare, and beyond. Our work is driven by a commitment to uplift the poor and marginalized, offering them hope and opportunities for a better future. Join us in making a difference today. Your contributions, whether big or small, help us continue our vital work. Together, we can change lives, one step at a time. Be a part of our journey and help us create a brighter tomorrow for all.
          </p>
          <div className='flex justify-center lg:justify-start mt-4'>
            <button className='bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600'>
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className='w-[80%] md:w-[80%] lg:w-[40%] mt-10 lg:mt-0 border-l-8 border-b-8 border-red-400'>
        <div className='space-y-4'>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LayoutScroll;
