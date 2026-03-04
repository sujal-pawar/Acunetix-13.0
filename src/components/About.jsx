import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about">
      {/* About content goes here */}
    </section>
  );
});

About.displayName = 'About';
export default About;
