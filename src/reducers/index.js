import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';

const rootReducer = combineReducers({
    timeline: timelineReducer
});

export default rootReducer;