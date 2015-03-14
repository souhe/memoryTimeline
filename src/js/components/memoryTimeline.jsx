var React = require('react');
var Menu = require('./menu.jsx');
var Timeline = require('./timeline.jsx');

var MemoryTimeline = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                <Menu />
                <Timeline />
            </div>
        );
    }
});

module.exports = MemoryTimeline;
