var React = require('react');
var TimelineStore = require('../stores/timelineStore.js');
var AccountStore = require('../stores/accountStore.js');
var ViewActionCreators = require('../actions/viewActionCreators.js');

var Timeline = React.createClass({
    componentDidMount: function(){
        TimelineStore.addEventListener(this.handleStoresChange);
        AccountStore.addEventListener(this.handleStoresChange);
        // ViewActionCreators.getTimelineData();
    },

    componentWillUnmount: function(){
        TimelineStore.removeEventListener(this.handleStoresChange);
        ViewActionCreators.removeEventListener(this.handleStoresChange);
    },

    getInitialState: function(){
        return {};
    },

    handleStoresChange: function(){
        this.setState({events: TimelineStore.getTimeline().events, isLoggedIn: AccountStore.isLoggedIn()});
    },

    handleFileClick: function(){
        ViewActionCreators.getTimelineData();
    },

    render: function(){
        var events = this.state.events? this.state.events.map(function(item){
            return (
                <div>{item.name}</div>
            );
        }): null;

        var files = this.state.isLoggedIn? <a href="#" onClick={this.handleFileClick}>open timeline.js</a> : null;

        return (
            <div>{events || files}</div>
        );
    }
});

module.exports = Timeline;
