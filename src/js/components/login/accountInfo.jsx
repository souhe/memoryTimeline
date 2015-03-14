var React = require('react');
var classNames = require('classnames');

var AccountInfo = React.createClass({
    propTypes: {
        name : React.PropTypes.string,
        photo: React.PropTypes.string,
        inProgress: React.PropTypes.bool,
        onLogoutClick: React.PropTypes.func
    },

    render: function() {
        var classes = classNames({
            'account-info': true,
            'in-progress': this.props.inProgress
        });
        return (
            <div className={classes}>
                <img src={this.props.photo} />
                <div className="name " data-logout="Logout" onClick={this.props.onLogoutClick}>{this.props.name}</div>
            </div>
        );
    }

});

module.exports = AccountInfo;
