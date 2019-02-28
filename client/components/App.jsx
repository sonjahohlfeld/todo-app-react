import React, {useState} from 'react';
import TodoForm from './TodoForm.jsx'

const Todo = ({todo, testid, index, updateTodo}) => {
    return (
        <div className="todo" data-testid={testid} style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            {todo.text} 
            <button onClick={() => updateTodo(index)} data-testid="completeTodo">Complete</button>
        </div>
    )
}

function App () {
    const [todos, setTodos] = useState([
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text: text, isCompleted: false}]
        setTodos(newTodos)
    }

    const updateTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true
        setTodos(newTodos)
    }


    return (
        <div>
            <h1 data-testid="appTitle">My Todo App</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo
                    updateTodo={updateTodo}
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
