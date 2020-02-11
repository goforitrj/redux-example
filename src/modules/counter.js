const initialState = {
    num: 0
};

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const onIncrease = () => ({ type: INCREASE });
export const onDecreate = () => ({ type: DECREASE });

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                num: state.num++
            };
        case DECREASE:
            return {
                ...state,
                num: state.num--
            };
        default:
            return state;
    }
}
