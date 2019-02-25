import React, {useState} from 'react';
import TodoForm from './TodoForm.jsx'

const Todo = ({todo}) => <div className="todo">{todo.text}</div>

function App () {
    const [todos, setTodos] = useState([
        {text: "Learn React"},
        {text: "Prepare Lunch"}
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo = {todo}
                />
            ))}       
        </div>
    );
}

export default App;
