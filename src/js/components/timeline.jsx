var React = require('react');
var TimelineStore = require('../stores/timelineStore.js');
var ViewActionCreators = require('../actions/viewActionCreators.js');

var Timeline = React.createClass({
    componentDidMount: function(){
        TimelineStore.addEventListener(this.handleStoreChange);
        ViewActionCreators.getTimelineData();
    },

    componentWillUnmount: function(){
        TimelineStore.removeEventListener(this.handleStoreChange);
    },

    getInitialState: function(){
        return {};
    },

    handleStoreChange: function(){
        this.setState({events: TimelineStore.getTimeline().events});
    },

    render: function(){
        var events = this.state.events? this.state.events.map(function(item){
            return (
                <div>{item.name}</div>
            );
        }): null;

        return (
            <div>{events}</div>
        );
    }
});

module.exports = Timeline;
