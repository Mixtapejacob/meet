// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <p>{event.summary}</p>
      <p>{event.location}</p>
      <p>{event.start?.dateTime || ""}</p>
      <p>{event.end?.dateTime || ""}</p>
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide" : "Show"}
      </button>
      {showDetails ? (
        <div className="details">
          <h2>Event Details</h2>
          {event.description}
        </div>
      ) : null}
    </li>
  );
};

export default Event;
