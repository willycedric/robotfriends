import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ONE_ROBOT_FAILED,
    REQUEST_ONE_ROBOT_PENDING, 
    REQUEST_ONE_ROBOT_SUCCESS
} from './constants';

export const setSearchField = (text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestRobots = () => (dispatch)=> {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}));
}

export const requestOneRobot = (id) => (dispatch)=> {
    console.log(' logging id from the action ', id);
    dispatch({type: REQUEST_ONE_ROBOT_PENDING});
    fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then(response => response.json())
    .then( data => dispatch({type:REQUEST_ONE_ROBOT_SUCCESS, payload:data}))
    .catch(error => dispatch({type:REQUEST_ONE_ROBOT_FAILED, payload:error}));
}