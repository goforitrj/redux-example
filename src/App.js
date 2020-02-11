import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import ToddsContainer from './containers/TodosContainer';

function App() {
    return (
        <div className="App">
            <h1>CounterContainer</h1>
            <CounterContainer />
            <h1>TODO</h1>
            <ToddsContainer />
        </div>
    );
}

export default App;
