import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';
import userEvent from '@testing-library/user-event';
import mockData from '../mockData';
import { extractLocations, getEvents } from '../api';



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

      test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents(); 
        const allLocations = extractLocations(allEvents);
        let CitySearchComponent = render(<CitySearch allLocations={allLocations} />);
    
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");
    
        // the suggestion's textContent look like this: "Berlin, Germany"
        const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
    
        await user.click(BerlinGermanySuggestion);
    
        expect(cityTextBox).toHaveValue("Berlin, Germany");
      });
    
});