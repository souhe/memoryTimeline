var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var memoryTimelineDispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js')
var CHANGE_EVENT = 'change';

var _state = {};

var TimelineStore = assign({
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addEventListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeEventListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    getTimeline: function(){
        return _state;
    }
}, EventEmitter.prototype);

TimelineStore.dispatchToken = memoryTimelineDispatcher.register(function(payload){
        var action = payload.action;

        switch(action.type){
            case ActionTypes.GET_TIMELINE_SUCCESS:
                _state = action.timeline;
                TimelineStore.emitChange();
                break;
        }
});

module.exports = TimelineStore;
