
// initialize the global state values 
const initialState = {
    counter: 0, 
    name: 'John Doe'
}


const reducer = (state = initialState, action) => {

    if(action.type === 'INCRE') {
        // increment the counter 
        return {
            ...state,
            counter: state.counter + 1 
        } 
    } else if (action.type === 'DECREM'){
        return {
            ...state,
            counter: state.counter -1
        } 

    }else if (action.type === 'ADD'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }else if (action.type === 'SUB'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }


    // returns the updated global state
    return state  
}

export default reducer 