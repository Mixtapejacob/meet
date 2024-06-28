const { render } = require("@testing-library/react");
const { default: App } = require("./App");

describe("<App>", () => {

  test('renders list of events', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
  
  test('render CitySearch', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
  
})
