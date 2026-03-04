import React, { forwardRef } from 'react';

const Sponsors = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="sponsors">
      {/* Sponsors content goes here */}
    </section>
  );
});

Sponsors.displayName = 'Sponsors';
export default Sponsors;
