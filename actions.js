//Actions
/*
//Action to add a new todo item
const ADD_TODO = 'ADD-TODO'
{
    type: ADD_TODO,
    text: 'Build my first Redux app'
}

//Actions can be put into seperate module if app is large enough
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'

{
    type: TOGGLE_TODO,
    index: 5
}

{
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_COMPLETED
*/

//Action Creators (Functions that will create the actions)


//Will return an action
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

///Used in traditionsl Flux
//An action creator that triggers a dispatch when invoked
function AddTodoWithDispatch(text) {
    const action = {
        type: ADD_TODO,
        text
    }
    dispatch(action)
}

///Used in flux (initiate a dispatch and then pass the result to the dispatch() function)
dispatch(addTodo(text))
dispatch(completeTodo(index))

//To create a bound action creator
const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))

//To call them directly
boundAddTodo(text)
boundCompleteTodo(index)

///Source Code

//ActionTypes
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//Other Constatns
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//Action Creators
export function addTodo(text) {
    return { type: ADD_TODO, text}
}

export function toggleTodo(index) {
    return {type: TOGGLE_TODO, index} 
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter}
}
