const initialState = [];

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;

export const addTodo = text => ({
    type: ADD_TODO,
    todo: { id: nextId++, text }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.filter(todo => todo.is !== action.id);
        default:
            return state;
    }
}
