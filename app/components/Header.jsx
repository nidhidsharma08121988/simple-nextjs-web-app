import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <nav className='container'>
        <div className='logo'>
          <Link href='/'>WebTech</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
