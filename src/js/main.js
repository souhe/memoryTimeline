window.React = require('react'); //TODO: Only for develping. Remove window.
var app = require('./components/editor.jsx');

React.render(app(null), document.getElementById("main"));