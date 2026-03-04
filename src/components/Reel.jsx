import React, { forwardRef } from 'react';

const Reel = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="reel">
      {/* Reel content goes here */}
    </section>
  );
});

Reel.displayName = 'Reel';
export default Reel;
