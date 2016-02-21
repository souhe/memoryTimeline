export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCEEDED = 'FETCH_EVENTS_SUCCEEDED';
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED';

function fetchEvents(){
    return dispatch => {
        dispatch({type: FETCH_EVENTS});
        
        fetch('/api/getEvents')
            .then(data => data.json())
            .then(response => {
                dispatch({type: FETCH_EVENTS_SUCCEEDED, data: response});
            })
            .catch(error => {
                dispatch({type: FETCH_EVENTS_FAILED, error});
            });
    };
}