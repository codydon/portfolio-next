import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { SiGithub, SiTwitter } from 'react-icons/si';

export default function Footer() {
  return (
    <div className='flex justify-evenly'>
      <div className=''>
        <p>
          &copy; <script>document.write(new Date().getFullYear());</script>{' '}
          Onserio Donald
        </p>
      </div>
      <div className='flex gap-2 p-2 text-lg'>
        <SiGithub />
        <SiLinkedin />
        <SiTwitter />
      </div>
    </div>
  );
}
