var React = require('react');
var TimelineStore = require('../stores/timelineStore.js');
var AccountStore = require('../stores/accountStore.js');
var ViewActionCreators = require('../actions/viewActionCreators.js');
var perfectScrollbar = require('perfect-scrollbar');

var Event = require('./timeline/event.jsx');
var FileList = require('./timeline/fileList.jsx');
var Timeline = require('./timeline/timeline.jsx');

var TimelineContent = React.createClass({
    componentDidMount: function(){
        TimelineStore.addEventListener(this.handleStoresChange);
        AccountStore.addEventListener(this.handleStoresChange);

        var component = this.getDOMNode();
        perfectScrollbar.initialize(component, {
            wheelSpeed: 1,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
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

        return <div className="right-content"> {events || files} </div>;
    }
});

module.exports = TimelineContent;
