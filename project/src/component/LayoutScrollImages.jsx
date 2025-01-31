import React from 'react';
import FadeImages from './FadeImages';

const LayoutScroll = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center lg:items-start h-screen relative mt-32'>
      <div className='w-[80%] lg:w-[40%] p-6'>
        <div className='sticky top-6 lg:top-auto lg:bottom-6'> 
          <h1 className='text-[42px] font-bold text-red-500 text-center lg:text-left'>How We Sustain Lives</h1>
          <p className='text-lg text-justify mt-5'>
          At Help human rights, we are dedicated to supporting vulnerable communities and enhancing their quality of life through various initiatives. Our Job Bank connects individuals with meaningful employment opportunities, providing them with the means to support themselves and their families. Through our Legal Aid services, we offer free legal assistance, ensuring that justice is accessible to all, regardless of financial standing.

We extend our care to the elderly through our Old Age Home, where we provide a safe, nurturing environment that includes medical care, social activities, and companionship. Our Blood Donation drives play a crucial role in saving lives by ensuring a steady supply of blood for medical emergencies..</p>
          <div className='flex justify-center lg:justify-start mt-4'>
            <button className='bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600'>
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className='w-[70%]  lg:w-[40%]'>
        <div className='space-y-4 mt-20'>
          <FadeImages/>
        </div>
      </div>
    </div>
  );
};

export default LayoutScroll;
