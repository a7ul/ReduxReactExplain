const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//ACTION CREATORS
export const increment = ()=>{
    return {
        type: INCREMENT
    };
}

export const decrement = ()=>{
    return {
        type: DECREMENT
    };
}