import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import App from '../client/components/App';
import { getByLabelText, getByTestId, getByText, queryAllByTestId } from 'react-testing-library';

const $ = require('jquery')

test('todo app has title', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.querySelector('h1')).toHaveTextContent('My Todo App')
});

test('todo form renders a form', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  const input = getByTestId(div, 'enterTodo')
  input.value = "Write React tests"
  $("#enterTodoLabel").trigger("click")
  //implement key press event
  const todoItem = getByTestId(div, 'todo-0')
  expect(getByTestId(div, 'bla')).toHaveTextContent('blub')
});
