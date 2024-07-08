import Event from "./Event";
import NumberOfEvents from "./NumberOfEvent";


const EventList = ({ events }) => {
  return (
    <> 
    <NumberOfEvents />
    <ul id="event-list" role="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
    </>
   
  );
};

export default EventList;