var React = require('react');
var AccountStore = require('../../stores/accountStore.js');
var ViewActionCreators = require('../../actions/viewActionCreators.js');
var request = require('superagent');

var AccountInfo = require('./accountInfo.jsx');
var LogInButton = require('./logInButton.jsx');

var Timeline = React.createClass({
    componentDidMount: function(){
        AccountStore.addEventListener(this.handleStoreChange);
        ViewActionCreators.initAuthentication();
    },

    componentWillUnmount: function(){
        AccountStore.removeEventListener(this.handleStoreChange);
    },

    getInitialState: function(){
        return {};
    },

    handleStoreChange: function(){
        var accountData = AccountStore.getAccountInfo();
        var status = AccountStore.getStatus();
        this.setState({
            isLoggedIn: status.isLoggedIn,
            inProgress: status.inProgress,
            name: accountData.name,
            photo: accountData.photo
        });
    },

    handleLogoutClick: function(){
        ViewActionCreators.logOut();
    },

    handleLoginClick: function(){
        ViewActionCreators.logIn();
    },

    render: function(){

        var content = this.state.isLoggedIn?
            <AccountInfo name={this.state.name} photo={this.state.photo} onLogoutClick={this.handleLogoutClick} inProgress={this.state.inProgress}/> :
            <LogInButton onClick={this.handleLoginClick} inProgress={this.state.inProgress} />

        return (
            <div className="login">
                {content}
            </div>
        );
    }
});

module.exports = Timeline;
