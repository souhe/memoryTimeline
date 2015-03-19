window.React = require('react'); //TODO: Only for develping. Remove window.
var app = require('./components/memoryTimeline.jsx');

React.render( React.createElement(app,null), document.getElementById("main"));
