import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import mockData from "../mockData";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });
  beforeEach(() => {
    EventComponent = render(<Event event={mockData[0]} />);
  });

  test("Creates event title", () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  test("creates event location", () => {
    expect(
      EventComponent.queryByText(mockData[0].location)
    ).toBeInTheDocument();
  });

  test("Start time", () => {
    expect(
      EventComponent.queryByText(mockData[0].start?.dateTime)
    ).toBeInTheDocument();
  });

  test("End time", () => {
    expect(
      EventComponent.queryByText(mockData[0].end?.dateTime)
    ).toBeInTheDocument();
  });

  test("Button text", () => {
    expect(EventComponent.queryByText("Show")).toBeInTheDocument();
  });

  test("Clicking button toggles details visibility", () => {
    const button = EventComponent.getByText("Show");
    // Click to show details
    fireEvent.click(button);

    const details =
      EventComponent.container.querySelector(".event-description"); // Get the details section
    expect(details).toBeInTheDocument();
  });
});