import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, Tech, StarsCanvas } from './components';
import { useEffect, useState } from 'react';
import styles from "../src/assets/styles/backTotop.module.css";
import { ArrowBigUp, ChevronUp } from 'lucide-react'

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [porcetageScroll, setPorcetageScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight; // toatal do scrollheigth
    const visibleHeight = document.documentElement.clientHeight; // Total do height do cliente (USER)
    const percentagem = (position / (totalHeight - visibleHeight)) * 100;
    setScrollPosition(position);
    setPorcetageScroll(percentagem)
    setShowScroll(position > 100); // exibe o botão de voltar ao topo se a posição for maior que 100
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {/** Back to top */}
      <>
        <button style={{ animation: `${porcetageScroll < 70 ? '' : 'toTop 4s infinite ease-in-out'}` }} className={`${styles.scrollTop} ${showScroll ? "" : styles.hide}`} onClick={scrollToTop}>
          <span className='text-xs'>
            <ArrowBigUp />
          </span>
        </button>
      </>
    </BrowserRouter >
  )

}

export default App
