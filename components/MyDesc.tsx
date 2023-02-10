import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import Image from 'next/image';

export default function MyDesc() {
  return (
    <>
      <div className='md:flex font-bold text-4xl text-blue-500 my-4 font-mono items-center justify-center'>
        <div className='text-center'>G'day, I'm Onserio Donald &nbsp;</div>
        <div className='flex items-center justify-center'>
          <FaHandPeace size={70} color='#0373FC' />
        </div>
      </div>
      <div className='sm:text-lg md:text-2xl my-4 px-4'>
        Full-Stack Developer with a passion for creating high-quality, scalable
        web solutions.Strong experience developing and maintaining complex web
        applications, from the front end to the back end. Dedicated to staying
        up to date on the latest technologies and industry trends.
      </div>
      <div className='text-2xl font-mono font-semibold py-4'> My favourite tools </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-4 mb-6'>
          <div className='p-4 sm:text-xs'> <Image src='bootstrap.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='create-react-app.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='css-3.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='figma.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='html-5.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='javascript.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='laravel.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='mariadb-icon.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='mysql-icon.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='nextjs-icon.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='php-alt.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='react.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='tailwindcss-icon.svg' className='' alt='' width={70} height={70} /> </div>
          <div className='p-4 sm:text-xs'> <Image src='typescript-icon-round.svg' className='' alt='' width={70} height={70} /> </div>
      </div>
    </>
  );
}
