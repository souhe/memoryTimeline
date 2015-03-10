var React = require('react');
var AccountStore = require('../stores/accountStore.js');
var ViewActionCreators = require('../actions/viewActionCreators.js');
var request = require('superagent');

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
        this.setState({
            name: accountData.name,
            photo: accountData.photo
        });

        //TODO: change
        // if(AccountStore.isLoggedIn()){
        //     ViewActionCreators.getTimelineData();
        // }
    },

    handleLoginClick: function(){
        ViewActionCreators.logIn();
    },

    render: function(){
        return (
            <div>
                <button onClick={this.handleLoginClick}>Log In</button>
                <div>{this.state.name}</div>
                <img src={this.state.photo} width="24" />
            </div>
        );
    }
});

module.exports = Timeline;
