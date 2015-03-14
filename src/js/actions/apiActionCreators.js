var Dispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js');
var OnedriveApi = require('../api/ondriveApi.js');

var ViewActionCreators = {

    loggedIn: function(account){
        Dispatcher.handleApiAction({
            type: ActionTypes.LOGGED_IN,
            account: account
        });
    },

    loggedOut: function(account){
        Dispatcher.handleApiAction({
            type: ActionTypes.LOGGED_OUT,
        });
    },

    getTimelineSuccess: function(data){
        Dispatcher.handleApiAction({
            type: ActionTypes.GET_TIMELINE_SUCCESS,
            timeline: data
        });
    }
};

module.exports = ViewActionCreators;
