Feature: Specify Number of Events
 Scenario: When user hasn't specified a number, 32 events are shown by default
  Given user opens the app
  When there is no specified number of events
  Then 32 events will be shown by default

 Scenario: User can change the number of events displayed
  Given the user opened the app
  When user specifies a number of events
  Then the specified number of events will be shown