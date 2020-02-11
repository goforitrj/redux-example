import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { createTodo, toggleTodo } from '../modules/todos';

export default function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreateTodo = text => {
        dispatch(createTodo(text));
    };
    const onToggleTodo = id => {
        dispatch(toggleTodo(id));
    };

    return (
        <>
            <Todos
                todos={todos}
                onCreateTodo={onCreateTodo}
                onToggleTodo={onToggleTodo}
            />
        </>
    );
}
