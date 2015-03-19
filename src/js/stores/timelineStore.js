var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var moment = require('moment');

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

function recievedTimeline(timeline){
    timeline.events.sort(function(a, b){
        var aDate = moment(a.startDate);
        var bDate = moment(b.startDate);

        if(aDate.isBefore(bDate)){
            return -1;
        } else if(aDate.isSame(bDate)){
            return 0;
        }
        return 1;
    })
    _state = timeline;
}

TimelineStore.dispatchToken = memoryTimelineDispatcher.register(function(payload){
        var action = payload.action;

        switch(action.type){
            case ActionTypes.GET_TIMELINE_SUCCESS:
                recievedTimeline(action.timeline);
                TimelineStore.emitChange();
                break;
        }
});

module.exports = TimelineStore;
