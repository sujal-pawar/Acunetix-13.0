import React, { forwardRef } from 'react';

const Event = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="events">
      {/* Events content goes here */}
    </section>
  );
});

Event.displayName = 'Event';
export default Event;
