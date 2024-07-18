                           MEET APP PROJECT DESCRIPTION
  The Meet app is a progressive web app with a serverless backend. It offers offline access to upcoming events in specific cities and it prioritizes code quality and test coverage for optimal performance.

FEATURE 1: FILTER EVENTS BY CITY
Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see the list of upcoming events.

Scenario 3: User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.