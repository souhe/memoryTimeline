var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var memoryTimelineDispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js')
var CHANGE_EVENT = 'change_account';

var _state = {
    isLoggedIn : false,
    authenticateToken: '',
    photo: '',
    name: ''
};

var AccountStore = assign({
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addEventListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeEventListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    isLoggedIn: function(){
        return _state.isLoggedIn;
    },

    getToken: function(){
        return _state.authenticateToken;
    },

    getStatus: function(){
        return {
            isLoggedIn: _state.isLoggedIn,
            token: _state.authenticateToken,
            inProgress: _state.inProgress
        }
    },

    getAccountInfo: function(){
        return {
            name: _state.name,
            photo: _state.photo
        };
    }
}, EventEmitter.prototype);

AccountStore.dispatchToken = memoryTimelineDispatcher.register(function(payload){
        var action = payload.action;

        switch(action.type){
            case ActionTypes.LOGGED_IN:
                _state = {
                    isLoggedIn: true,
                    authenticateToken: action.account.token,
                    photo: action.account.photo,
                    name: action.account.name,
                    inProgress: false
                };
                AccountStore.emitChange();
                break;
            case ActionTypes.LOGGED_OUT:
                _state = {
                    isLoggedIn: false,
                    authenticateToken: null,
                    photo: '',
                    name: '',
                    inProgress: false
                };
                AccountStore.emitChange();
                break;
            case ActionTypes.LOG_IN_START:
            case ActionTypes.LOG_OUT_START:
                _state.inProgress = true;
                AccountStore.emitChange();
                break;
        }
});

module.exports = AccountStore;
