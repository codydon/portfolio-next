import React from 'react';

export default function Services() {
  return (
    <>
      <div className='text-2xl font-mono font-semibold py-4'>Services</div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center m-4'>
        <div className='grid-item bg-pink-500 rounded py-4'>
          <div className='text-4xl'>
            <i className='fab fa-sketch'></i>
          </div>
          <div className='font-bold'>Design</div>
          <div className=' text-sm'>hhhhh</div>
        </div>

        <div className='grid-item bg-pink-500 rounded py-4'>
          <div className='text-4xl'>
            <i className='fab fa-sketch'></i>
          </div>
          <div className='font-bold'>Design</div>
          <div className=' text-sm'>hhhhh</div>
        </div>

        <div className='grid-item bg-pink-500 rounded py-4'>
          <div className='text-4xl'>
            <i className='fab fa-sketch'></i>
          </div>
          <div className='font-bold'>Design</div>
          <div className=' text-sm'>hhhhh</div>
        </div>

      </div>
    </>
  );
}
