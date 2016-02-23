import {FETCH_EVENTS, FETCH_EVENTS_SUCCEEDED, FETCH_EVENTS_FAILED} from '../actions/timelineActions';

const initialState = {
    events: []
};

export default function timelineReducer(state = initialState, action = {}){
    switch(action.type){        
        case FETCH_EVENTS_SUCCEEDED: 
            console.log('fetch_succeeded');
            return {
                ...state, 
                events: action.events
            };
        case FETCH_EVENTS: 
        case FETCH_EVENTS_FAILED: 
            return state;
        default:
            return state;
    }
}