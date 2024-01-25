import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <nav className='container'>
        <div className='logo'>
          <Link href='/'>Nidhi NextJs Project</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
