import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import App from '../client/components/App';
import { render, fireEvent } from 'react-testing-library';

const $ = require('jquery')

test('todo app has title', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.querySelector('h1')).toHaveTextContent('My Todo App')
});

test('add todo to todo list', () => {
  const {getByTestId} = render(<App />)
  fireEvent.change(getByTestId('enterTodo'), {target: {value: "Learn React"}})
  fireEvent.submit(getByTestId('enterTodoForm')) 
  expect(getByTestId('todo-0')).toHaveTextContent("Learn React")
});
