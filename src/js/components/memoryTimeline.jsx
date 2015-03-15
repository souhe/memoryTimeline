var React = require('react');

var Menu = require('./menu.jsx');
var TimelineContent = require('./timelineContent.jsx');

var MemoryTimeline = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                <Menu />
                <TimelineContent />
            </div>
        );
    }
});

module.exports = MemoryTimeline;
