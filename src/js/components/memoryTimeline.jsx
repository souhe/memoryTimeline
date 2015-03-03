var React = require('react');
var Timeline = require('./timeline.jsx');
//var Menu = require('./menu.jsx');

var MemoryTimeline = React.createClass({
    render: function(){
        return (
            <div>    
                <Timeline />
            </div>
        );
    }
});

module.exports = MemoryTimeline;
