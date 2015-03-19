var React = require('react');
var LogIn = require('./login/logIn.jsx');

var  Menu = React.createClass({
    render: function() {
        return (
            <div className="lefthand-menu">
                <LogIn />
                {/*<Toolbox>
                    <ToolboxIcon className="" tooltip="Add"/>
                </Toolbox>
                */}
            </div>
        );
    }
});

module.exports = Menu;
