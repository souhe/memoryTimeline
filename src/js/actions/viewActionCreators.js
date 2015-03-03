var Dispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js');
var OnedriveApi = require('../api/ondriveApi.js');

var ViewActionCreators = {
    getTimelineData: function(){
        Dispatcher.handleViewAction({
            type: ActionTypes.GET_TIMELINE
        });
        OnedriveApi.getTimeline();
    }
};

module.exports = ViewActionCreators;
