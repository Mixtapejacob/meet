import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';
import mockData from '../mockData';

describe('<EventList /> component', () => {

  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList events={mockData} />);
    expect(EventListComponent.queryByRole("event-list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents(); 
    const EventListComponent  = render(<EventList events={allEvents} />);
expect(EventListComponent.getAllByRole("listitem")).toHaveLength(70);
  });

});