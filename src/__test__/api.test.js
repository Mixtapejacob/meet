import { extractLocations, getEvents } from '../api';
import mockData from '../mock-data';


describe('extractLocations', () => {
  it('should extract unique locations from events', () => {
    const events = [
      { location: 'New York' },
      { location: 'Paris' },
      { location: 'Berlin' },
      { location: 'New York' },
    ];
    const expectedLocations = ['New York', 'Paris', 'Berlin'];
    const locations = extractLocations(events);
    expect(locations).toEqual(expect.arrayContaining(expectedLocations));
    expect(locations.length).toBe(expectedLocations.length);
  });
});

describe('getEvents', () => {
  it('should return a list of mock events', async () => {
    const events = await getEvents();
    expect(events).toEqual(mockData);
  });
});
