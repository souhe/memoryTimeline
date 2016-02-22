import React, {Component} from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchEvents } from '../actions/timelineActions';

class Timeline extends Component{
    render() {
        return (
          <div>timeline</div>  
        );
    }
}
export default connect(state => state)(Timeline);
const withHooksTimeline = provideHooks({
    fetch: ({dispatch, params}) => dispatch(fetchEvents())
})(Timeline);

