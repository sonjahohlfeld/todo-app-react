import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App';

test('renders h1 element', () => {
  const div = document.createElement('div')
  console.log(div)
  ReactDOM.render(<App />, div)
  expect(div.querySelector('h1').textContent).toBe('Hello Universe')
});
