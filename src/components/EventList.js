// src/components/EventList.js

import Event from "./Event";
import NumberOfEvents from "./NumberOfEvents";

const EventList = ({ events }) => {
  return (
    <>
      <ul id="event-list" role="event-list">
        {events
          ? events.map((event) => <Event key={event.id} event={event} />)
          : null}
      </ul>
    </>
  );
};

export default EventList;
