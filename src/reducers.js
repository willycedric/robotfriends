import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ONE_ROBOT_FAILED,
    REQUEST_ONE_ROBOT_PENDING, 
    REQUEST_ONE_ROBOT_SUCCESS
} from './constants';
/**
 * With a reducer always return the state if it doesn't match any of the criteria.
 */
const initialStateSearch = {
    searchField: '',
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });

        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;

    }
}

const initialStateRobot = {
    isPending: false,
    robot: {},
    error: ''
}

export const requestOneRobot = (state = initialStateRobot, action = {}) => {
    switch (action.type) {
        case REQUEST_ONE_ROBOT_PENDING:
            return Object.assign({}, state, { isPending: true });

        case REQUEST_ONE_ROBOT_SUCCESS:
            return Object.assign({}, state, { robot: action.payload, isPending: false });
        case REQUEST_ONE_ROBOT_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;

    }
}