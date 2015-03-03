var objectAssign = require('object-assign'),
    Dispatcher = require('flux').Dispatcher;

var MemoryTimelineDispatcher = objectAssign(new Dispatcher(), {
        handleViewAction: function(action){
            var payload = {
                source: 'VIEW_ACTION',
                action: action
            };
            this.dispatch(payload);
        },
        handleApiAction: function(action){
            var payload = {
                source: 'API_ACTION',
                action: action
            };
            this.dispatch(payload);
        }
});

module.exports = MemoryTimelineDispatcher;
