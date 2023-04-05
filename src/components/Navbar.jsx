import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const [Active, setActive] = useState('');

const Navbar = () => {
  return (
    <div>
      <nav className={`${styles.paddingX} w-full flex items-center py- fixed top-0 z-20`}>
        <div className='w-full flex justify-center items-center max-w-7xl mx-auto'>

          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0)
            }}
          >

          </Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar