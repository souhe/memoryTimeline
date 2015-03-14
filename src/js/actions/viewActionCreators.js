var Dispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js');
var OnedriveApi = require('../api/ondriveApi.js');

var ViewActionCreators = {
    getTimelineData: function(){
        Dispatcher.handleViewAction({
            type: ActionTypes.GET_TIMELINE
        });
        OnedriveApi.getTimeline();
    },

    initAuthentication: function(){
        OnedriveApi.initAuthentication();
    },

    logIn: function(){
        Dispatcher.handleViewAction({
            type: ActionTypes.LOG_IN_START
        });
        OnedriveApi.logInAndGetProfile();
    },

    logOut: function(){
        Dispatcher.handleViewAction({
            type: ActionTypes.LOG_OUT_START
        });
        OnedriveApi.logOut();
    }
};

module.exports = ViewActionCreators;
