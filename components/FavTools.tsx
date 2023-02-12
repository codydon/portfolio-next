import React from 'react';
import Image from 'next/image';

export default function () {
  return (
    <div className=''>
      <div className='text-2xl font-mono font-semibold py-4'>
        My favourite tools
      </div>
      <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>
        <div className='grid-item p-4  '>
          <Image
            src='bootstrap.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='create-react-app.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='css-3.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='figma.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='html-5.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='javascript.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='laravel.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='mariadb-icon.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='mysql-icon.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='nextjs-icon.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='php-alt.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='react.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='grid-item p-4  '>
          <Image
            src='tailwindcss-icon.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className='p-2 '>
          <Image
            src='typescript-icon-round.svg'
            className=''
            alt=''
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
