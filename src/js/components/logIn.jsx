var React = require('react');
var LoginStore = require('../stores/loginStore.js'); //TODO
var ViewActionCreators = require('../actions/viewActionCreators.js');

var Timeline = React.createClass({
    componentDidMount: function(){
        LoginStore.addEventListener(this.handleStoreChange);
    },

    componentWillUnmount: function(){
        LoginStore.removeEventListener(this.handleStoreChange);
    },

    getInitialState: function(){
        return {};
    },

    handleStoreChange: function(){
        this.setState({events: TimelineStore.getTimeline().events});
    },

    handleLoginClick: function(){

    },

    render: function(){
        return (
            <div>
                <button onClick="handleLoginClick">Log In</button>
            </div>
        );
    }
});

module.exports = Timeline;
