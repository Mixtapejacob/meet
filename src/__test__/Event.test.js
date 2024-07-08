import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';
import mockData from '../mockData';

describe('<EventList /> component', () => {

  test('has an element with "list" role', () => {
    const EventListComponent = render(<Event event={mockData[0]}  />);
    expect(EventListComponent.queryByText(mockData[0].location)).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents(); 
    const EventListComponent  = render(<Event />);
expect(EventListComponent.queryByText("Show details")).toBeInTheDocument();
  });

});