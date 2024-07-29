Feature: Show/Hide Event Details:
 Scenario: an event element is collapsed by default.
  Given user hasn't selected and event
  When user views the list of events
  Then event elements are collapsed


 Scenario: user can expand an event to see details.
  Given the list of events are displayed
  When user clicks and event element
  Then the event element is expanded to show more details

 Scenario: user can collapse an event to show more details.
  Given the event element has be expanded
  When user clicks to collapse the event element
  Then the event element is collapsed back to its default position
