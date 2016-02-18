export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCEEDED = 'FETCH_EVENTS_SUCCEEDED';
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED';

function fetchEvents(){
    return dispatch => {
        dispatch({type: FETCH_EVENTS});
        
        let file = new File('./timeline.json');    
    };
}