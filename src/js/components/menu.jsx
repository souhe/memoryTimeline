var React = require('react');
var LogIn = require('./logIn.jsx');

var  Menu = React.createClass({
    render: function() {
        return (
            <div className="lefthand-menu">
                <LogIn />
            </div>
        );
    }
});

module.exports = Menu;
