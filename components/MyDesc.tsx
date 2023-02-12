import React from 'react';
import { FaRegSmileWink } from 'react-icons/fa';
// import Image from 'next/image';

export default function MyDesc() {
  return (
    <>
      <div className='md:flex font-bold text-4xl text-blue-500 my-4 font-mono items-center justify-center'>
        <div className='text-center'>G'day, I'm Onserio Donald </div>
        <div className='flex items-center justify-center text-blue-600 p-2'>
          <FaRegSmileWink />
        </div>
      </div>
      <div className='sm:text-lg md:text-2xl my-4 px-4'>
        A Full-Stack Developer with a passion for creating high-quality, scalable
        web solutions.Strong experience developing and maintaining complex web
        applications, from the front end to the back end. Dedicated to staying
        up to date on the latest technologies and industry trends.
      </div>
      
    </>
  );
}
