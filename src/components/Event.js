import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <p>{event.summary}</p>
      <p>{event.location}</p>
      <p>{event.start?.dateTime || ""}</p>
      <p>{event.end?.dateTime || ""}</p>
      <button onClick={toggleDetails}>{showDetails ? "Hide" : "Show"}</button>
      {showDetails ? (
        <div className="event-description">{event.description}</div>
      ) : null}
    </li>
  );
};

export default Event;