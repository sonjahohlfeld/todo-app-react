import React from 'react';
import 'jest-dom/extend-expect';
import App from '../client/components/App';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup)

test('todo app has title', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId('appTitle')).toHaveTextContent('My Todo App')
});

test('todo app should add new todos to list', () => {
  const {getByTestId} = render(<App />)
  fireEvent.change(getByTestId('enterTodo'), {target: {value: "Learn React"}})
  fireEvent.submit(getByTestId('enterTodoForm')) 
  expect(getByTestId('todo-0')).toHaveTextContent("Learn React")
});

test('todo app should set todos to completed', () => {
  const {getByTestId, debug} = render(<App />)
  fireEvent.change(getByTestId('enterTodo'), {target: {value: "Learn React"}})
  fireEvent.submit(getByTestId('enterTodoForm')) 
  fireEvent.click(getByTestId('completeTodo'))
  expect(getByTestId('todo-0')).toHaveStyle('text-decoration: line-through')
})
