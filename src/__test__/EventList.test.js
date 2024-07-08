import { render, screen, waitFor, within } from "@testing-library/react";
import App from "../App";
import EventList from "../components/EventList";
import { getEvents } from "../api";


describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(
      EventListComponent.queryByRole("number-of-events")
    ).toBeInTheDocument();
  });
});

describe("<EventList /> integration", () => {
  test("renders a list of 32 events when the app is mounted and rendered", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector("#event-list");
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      expect(EventListItems.length).toBe(0);
    });
  });
});