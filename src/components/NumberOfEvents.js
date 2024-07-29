import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventNumber, setEventNumber] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (setCurrentNOE) {
      setCurrentNOE(value);
    }
    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Only positive numbers are allowed";
    } else {
      infoText = "";
    }
    setErrorAlert(infoText);
    setEventNumber(value);
  };

  return (
    <div role="number-of-events" id="number-of-events">
      {setErrorAlert}
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        className="number-of-events-input"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
