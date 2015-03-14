var React = require('react');
var classNames = require('classnames');

var LogInButton = React.createClass({
    propTypes: {
        inProgress: React.PropTypes.bool,
        onClick: React.PropTypes.func
    },

    render: function() {
        var classes = classNames({
            'button': true,
            'login-button': true,
            'in-progress': this.props.inProgress
        })
        return (
            <button onClick={this.props.onClick} className={classes}>Log In</button>
        );
    }

});

module.exports = LogInButton;
