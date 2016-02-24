import formatUrl from '../helpers/formatUrl';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCEEDED = 'FETCH_EVENTS_SUCCEEDED';
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED';

export function fetchEvents(){
    return dispatch => {
        dispatch({type: FETCH_EVENTS});
        return fetch(formatUrl('/api/getEvents'))
            .then(response => response.json())
            .then(data => {
                dispatch({type: FETCH_EVENTS_SUCCEEDED, events: data.events, title: data.title});
            })
            .catch(error => {
                dispatch({type: FETCH_EVENTS_FAILED, error});
            });
    };
}
