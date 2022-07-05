// import {createStore} from 'redux';

// const reducerFn = (state = {counter : 0},action) =>{

//     if(action.type === "INC"){
//         return {counter : state.counter + 1};
//     }
//     if(action.type === "DEC"){
//         if(state.counter <= 0){
//             return {counter: 0};
//         }
//         return {counter : state.counter - 1};
//     }
//     if(action.type === "ADDBY"){
//         return {counter: state.counter + action.payload};
//     }
//     return state;
// }

// const store = createStore(reducerFn);
// export default store;



import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState : {counter: 0},
    reducers: {
        increment(state, action){
            state.counter ++;
        },
        decrement(state, action){
            if(state.counter >0){
                state.counter --;
            }
            
        },
        addby(state, action){
            state.counter += action.payload;
        },
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})
export const actions = counterSlice.actions;
export default store;
