var React = require('react');
var TimelineStore = require('../stores/timelineStore.js');
var AccountStore = require('../stores/accountStore.js');
var ViewActionCreators = require('../actions/viewActionCreators.js');

var Event = require('./timeline/event.jsx');
var FileList = require('./timeline/fileList.jsx');
var Timeline = require('./timeline/timeline.jsx');

var TimelineContent = React.createClass({
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
        var events = this.state.events? <Timeline events={this.state.events}/>: null;
        var files = this.state.isLoggedIn? <FileList files={[]} onFileClick={this.handleFileClick} /> : null;

        return events || files;
    }
});

module.exports = TimelineContent;
