import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import App from '../client/components/App';

test('todo form renders a form', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.querySelector('form')).toBeTruthy()
});
