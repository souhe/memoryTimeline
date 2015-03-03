window.React = require('react'); //TODO: Only for develping. Remove window.
var app = require('./components/memoryTimeline.jsx');

React.render(app(null), document.getElementById("main"));
