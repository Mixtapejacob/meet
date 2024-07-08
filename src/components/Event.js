import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <p>{event.summary}</p>
      <p>{event.location}</p>
      <p>{event.start?.dateTime || ""}</p>
      <p>{event.end?.dateTime || ""}</p>
      <button>{showDetails ? "Hide" : "Show"}</button>
      {showDetails ? <div>{event.description}</div> : null}
    </li>
  );
};

export default Event;