import React, { forwardRef } from 'react';

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="home">
      {/* Hero content goes here */}
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
