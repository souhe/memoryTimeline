import React, {Component} from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchEvents } from '../actions/timelineActions';

class Timeline extends Component{
    render() {
        return (
          <div>{this.props.events}</div>  
        );
    }
}

const withHooksTimeline = provideHooks({
    fetch: ({dispatch, params}) => dispatch(fetchEvents())
})(Timeline);

export default connect(state => ({events: state.events}))(withHooksTimeline);
