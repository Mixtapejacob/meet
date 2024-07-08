import { useState } from "react";

const Event = ({event}) => {
const [showDetails, setShowDetails] = useState(false);
    return (
      <ul>
      <li>{event.summary}</li>
      <li>{event.location}</li>
      <button onClick={setShowDetails(!showDetails)}> {showDetails? "Hide details": "Show details"} </button>
      {
        showDetails? 
        <div>{event.description}</div>
        : <></>
      }
      </ul>
    );
  }
  
  export default Event;