import React, {useState} from 'react';

function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo(value)
        setValue("")
    }

    return (
        <form data-testid="enterTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="enterTodoLabel">Enter Todo: </label>
            <input
                data-testid="enterTodo"
                id="enterTodoLabel"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="input"
            />
        </form>
    )
}

export default TodoForm;