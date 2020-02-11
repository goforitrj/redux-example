import { createStore } from 'redux';
// createStore is a function to make store
// There is only one store in a project

// initialState
const initialState = {
    counter: 0,
    text: '',
    list: []
};

// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LSIT';

// action producing function
const increase = () => ({
    type: INCREASE
});

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

// Store
const store = createStore(reducer);
console.log(store.getState());

// whenever state is changed listener will be called
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const ussubscribe = store.subscribe(listener);

// dispach actions
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('HELLO'));
store.dispatch(addToList({ id: 1, text: 'wow' }));
