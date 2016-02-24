import React, {Component} from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchEvents } from '../actions/timelineActions';
import styles from './Timeline.less';

class Timeline extends Component{
    render() {
        console.log(styles);
        return (     
            <div className={styles.timeline}>
                <div>EVENTS: </div>
                <ul>
                {this.props.events.map(x => (<li >{x.title}</li>))}
                </ul>
            </div>  
        );
    }
}

const withHooksTimeline = provideHooks({
    fetch: ({dispatch, params}) => dispatch(fetchEvents())
})(Timeline);

export default connect(state => ({events: state.timeline.events}))(withHooksTimeline);
