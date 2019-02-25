import React, {useState} from 'react';

const Todo = ({todo}) => <div className="todo">{todo.text}</div>

function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="input"
            />
        </form>
    )
}

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
