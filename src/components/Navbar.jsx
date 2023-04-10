import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setactive] = useState("");
  const [toggle, settoggle] = useState(false);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div>
      <nav className={`${styles.paddingX}  w-full flex items-center py-2 fixed top-0 z-20 
      ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
        <div className='w-full flex justify-between items-center  mx-auto'>

          <Link to='/' className='flex items-center gap-2'
            onClick={() => {
              window.scrollTo(0, 0)
              setactive("")
            }}>
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white font-bold cursor-pointer text-[18px]'>Danilson Kayumbuca
              &nbsp;<span className='sm:block hidden'>| Developer</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-2'>
            {navLinks.map((link) => (
              <li key={link.id} className={
                `${active === link.title ? "text-red-500" : "text-secondary"} 
                hover:text-white text-[18px]`

              }
                onClick={() => setactive(link
                  .title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>


          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => settoggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} 'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 w-[140px] z-10 rounded-xl'`}>
              <ul className='list-none flex flex-col items-start justify-end gap-4'>
                {navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? "text-red-500" : "text-secondary"} font-poppins cursor-pointer px-3 py-1 font-medium text-[16px]`}
                    onClick={() => {
                      setactive(link.title)
                      settoggle(!toggle)
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navbar