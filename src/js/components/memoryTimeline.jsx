var React = require('react');
var Timeline = require('./timeline.jsx');
var Login = require('./logIn.jsx');
//var Menu = require('./menu.jsx');

var MemoryTimeline = React.createClass({
    render: function(){
        return (
            <div>
                <Login />
                <Timeline />
            </div>
        );
    }
});

module.exports = MemoryTimeline;
