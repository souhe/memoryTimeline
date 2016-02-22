export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCEEDED = 'FETCH_EVENTS_SUCCEEDED';
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED';

export function fetchEvents(){
    return dispatch => {
        dispatch({type: FETCH_EVENTS});
        console.log('fetch');
        // fetch('//api/getEvents')
        //     .then(response => response.json())
        //     .then(data => {
        //         dispatch({type: FETCH_EVENTS_SUCCEEDED, data});
        //     })
        //     .catch(error => {
        //         dispatch({type: FETCH_EVENTS_FAILED, error});
        //     });
    };
}
