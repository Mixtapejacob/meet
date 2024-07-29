import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("an event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("user hasn't selected and event", () => {
      AppComponent = render(<App />);
    });

    when("user views the list of events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(15);
      });
    });

    then("event elements are collapsed", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  ///scenario 2///
  test("user can expand an event to see details.", ({ given, when, then }) => {
    let AppComponent;
    given("the list of events are displayed", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("user clicks and event element", async () => {
      const button = AppComponent.queryAllByText("Show")[0];
      await userEvent.click(button);
    });

    then("the event element is expanded to show more details", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  ///scenario 3///
  test("user can collapse an event to show more details.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the event element has be expanded", async () => {
      AppComponent = render(<App />);
    });

    when("user clicks to collapse the event element", async () => {
      const button = AppComponent.queryAllByText("Hide")[0];
      await userEvent.click(button);
    });

    then("the event element is collapsed back to its default position", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeNull();
    });
  });
});
