import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import TodoForm from '../client/components/TodoForm';
import App from '../client/components/App';
import { getByLabelText, getByTestId, getByText, queryAllByTestId } from 'react-testing-library';

test('todo form renders a form', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  const input = getByTestId(div, 'enterTodo')
  input.value = "Write React tests"
  //implement key press event
  const todoItem = getByTestId(div, 'bla')
  expect(getByTestId(div, 'bla')).toHaveTextContent('blub')
});
