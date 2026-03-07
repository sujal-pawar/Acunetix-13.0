import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'

/* ── Force scroll to top — used on route change + after exit animation ── */
function forceScrollTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    forceScrollTop();
  }, [pathname]);
  return null;
}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Event from './components/Event'
import Schedule from './components/Schedule'
import Sponsors from './components/Sponsors'
import Reel from './components/Reel'
import Footer from './components/Footer'
import SchedulePage from './components/SchedulePage'
import EventDetails from './components/EventDetails'

function HomePage({ scrollToRefs, scrollToSection, isScrolled }) {
  return (
    <>
      <Navbar
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      <main className="grow bg-black">
        <Hero ref={scrollToRefs.heroRef} />
        <About ref={scrollToRefs.aboutRef} />
        <Schedule ref={scrollToRefs.scheduleRef} />
        <Event ref={scrollToRefs.eventRef} />
        <Sponsors ref={scrollToRefs.sponsorsRef} />
        <Reel ref={scrollToRefs.reelRef} />
      </main>

      <Footer
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
      />
    </>
  )
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const scheduleRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const reelRef = useRef(null);

  const scrollToRefs = { heroRef, aboutRef, scheduleRef, eventRef, sponsorsRef, reelRef };
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ScrollToTop />
      <AnimatePresence mode="wait" onExitComplete={forceScrollTop}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage
                scrollToRefs={scrollToRefs}
                scrollToSection={scrollToSection}
                isScrolled={isScrolled}
              />
            }
          />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/events/:eventName" element={<EventDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App