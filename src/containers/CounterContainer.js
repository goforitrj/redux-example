import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

export default function CounterContainer() {
    // useSelector 1)
    // bad at perfornamce
    // reason: rerender and create new {number,diff} eveytime when state is changed
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));

    // useSelector 2)
    // good at performance
    // reason: rerender only when number is changed
    // const number = useSelector(state => state.counter.number);
    // reason: rerender only when diff is changed
    // const diff = useSelector(state => state.counter.diff);

    // useSelector 3)
    // good at performance
    // using shallowEqual
    const { number, diff } = useSelector(
        state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        shallowEqual
    );

    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };
    const onDecrease = () => {
        dispatch(decrease());
    };
    const onSetDiff = diff => {
        dispatch(setDiff(diff));
    };
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        ></Counter>
    );
}
