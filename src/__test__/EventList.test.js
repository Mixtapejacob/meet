// src/__tests__/EventList.test.js

import { render, screen, waitFor, within } from "@testing-library/react";
import { getEvents } from "../api";
import EventList from "../components/EventList";
import App from "../App";
import mockData from "../mock-data";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test("renders correct number of events", async () => {
    const allEvents = mockData;

    EventListComponent.rerender(<EventList events={mockData} />);
    expect(EventListComponent.getAllByRole("event-list")).toHaveLength(1);
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
  test("renders a list of 2 events when the app is mounted and rendered", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector("#event-list");
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      expect(EventListItems.length).toBe(15);
    });
  });
});