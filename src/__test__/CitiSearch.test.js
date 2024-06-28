import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';
import userEvent from '@testing-library/user-event';
import mockData from '../mockData';
import { extractLocations } from '../api';



const user = userEvent.setup();

describe('<CitySearch /> component', () => {
    test('updates list of suggestions correctly when user types in city textbox', async () => {
        const user = userEvent.setup();
        const allEvents = mockData;
        const allLocations = extractLocations(allEvents);
        let CitySearchComponent = render(<CitySearch allLocations={allLocations} />);
    
        // user types "Berlin" in city textbox
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");
    
        // filter allLocations to locations matching "Berlin"
        const suggestions = allLocations? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
        }): [];
    
        // get all <li> elements inside the suggestion list
        const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(2);
      });
});