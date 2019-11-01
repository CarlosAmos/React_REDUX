import { VisibilityFilters } from "./actions";

// Reducers specifiy how the state changes and actions only describe wat happens

/*
//The state shape (Often needs to store date and some UI state)
//This state is seperate fromt he UI state.

{
    VisibilityFilters: 'SHOW_ALL',
    todos: [
        {
            text: 'Considier using Redux',
            completed: true
        },
        {
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
}*/

//Reducer for the action. (Takes previous state and action and returns the next state)
(previousState, action) => newState
//Never mutate its arguments, peform side effects (eg call APIs) or call non-pure functions in a reducer


