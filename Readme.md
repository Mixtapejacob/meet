                           MEET APP PROJECT DESCRIPTION
  The Meet app is a progressive web app with a serverless backend. It offers offline access to upcoming events in specific cities and it prioritizes code quality and test coverage for optimal performance.

## Feature 1 - Filter Events by City:
  ### Scenario 1: When a user hasn't searched for a city, show upcoming events from all cities.
    GIVEN user hasn’t searched for any city;
    WHEN the user opens the app;
    THEN the user should see the list of upcoming events.
  ### Scenario 2: User should see a list of suggestions when they search for a city.
    GIVEN the main page is open;
    WHEN user starts typing in the city textbox;
    THEN the user should see a list of cities (suggestions) that match what they’ve typed.
  ### Scenario 3: User can select a city from the suggested list.
    GIVEN user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
  WHEN the user selects a city (e.g., “Berlin, Germany”) from the list;
  THEN their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.
    
## Feature 2 - Show/Hide Event Details:
 ### Scenario 1: an event element is collapsed by default.
    GIVEN the user hasn't selected an event;
    WHEN the user views the list of events;
    THEN the event elements are collapsed. 
    
  ### Scenario 2: User can expand an event to see details.
    GIVEN the list of events are displayed;
    WHEN the user clicks on an event element;
    THEN the event element is expanded to show more details.
    
  ### Scenario 3: User can collapse an event to hide details
    GIVEN the event element has been expanded;
    WHEN the user clicks to collapse the event element;
    THEN the event element is collapsed back to its default position.
    
      As a user, I should be able to show/hide events and event details so I can see more/less information about an event.


## Feature 3 - Specify Number of Events:
  ### Scenario 1: When user hasn't specified a number, 32 events are shown by default.
    GIVEN user opens the app;
    WHEN there is no specified number of events;
    THEN 32 events will be shown by default.
    
  ### Scenario 2: User can change the number of events displayed.
    GIVEN the user opened the app;
    WHEN they specify a number of events;
    THEN the specified number of events will be shown.  
   
      As a user, I should be able to specify the amount of event information presented to make the search easier.


## Feature 4 - Use the App when Offline:
  ### Scenario 1: Show cached data when there's no internet connection.
    GIVEN the user opens the app;
    WHEN there is no internet connection;
    THEN the app will show cached data to the user.
    
  ### Scenario 2: Show error when user changes search settings.
    GIVEN the settings have been changed;
    WHEN the user goes back to the homepage;
    THEN there will be an error.

      As a user, I should be able to use the app while my device is offline.

    
## Feature 5 - Add an App Shortcut to the Home Screen:
  ### Scenario 1: User can install the meet app as a shortcut on their device's home screen.  
    GIVEN users should be able to create a shortcut;
    WHEN user selects "create shortcut";
    THEN the user will find the shortcut icon on their home screen.

      As a user, I should be able to have effective usability and create a shortcut from my device's homescreen.


## Feature 6 - Display Charts Visualizing Event Details:
  ### Scenario 1: Show a chart with the number of upcoming events in each city.
    GIVEN the user needs more specific information on events;
    WHEN the user selects a city;
    THEN they will see a chart with upcoming events in the city.

      As a user, I should be able to see charts with event information in each city.

# Serverless functions
  In this app we will also be using serverless functions.  These functions are responsible for managing user access and the OAuth tokens that go with user access.  This will allow the app to be more effective with the resources and scale them effectively to match user needs.  
