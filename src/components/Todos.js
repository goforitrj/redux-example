import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggleTodo }) {
    return (
        <li
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => onToggleTodo(todo.id)}
        >
            {todo.text}
        </li>
    );
});

const TodoList = React.memo(function TodoList({ todos, onToggleTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
});

export default function Todos({ todos, onCreateTodo, onToggleTodo }) {
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            onCreateTodo(text);
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Input your next todo"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <TodoList todos={todos} onToggleTodo={onToggleTodo} />
        </div>
    );
}
