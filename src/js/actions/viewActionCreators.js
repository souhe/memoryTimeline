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
        OnedriveApi.logInAndGetProfile();
    }
};

module.exports = ViewActionCreators;
