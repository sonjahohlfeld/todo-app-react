import React, {useState} from 'react';
import TodoForm from './TodoForm.jsx'

const Todo = ({todo, testid}) => <div className="todo" data-testid={testid}>{todo.text} <button data-testid="completeTodo">Complete</button></div>

function App () {
    const [todos, setTodos] = useState([
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text: text, isCompleted: false}]
        setTodos(newTodos)
    }


    return (
        <div>
            <h1 data-testid="appTitle">My Todo App</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo
                    testid={'todo-'+index}
                    key={index}
                    index={index}
                    todo = {todo}
                />
            ))}       
        </div>
    );
}

export default App;
