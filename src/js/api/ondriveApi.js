var Dispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js');
var request = require('superagent');
var odauth = require('../utils/odauth.js');

var OneDriveApi = {
    logIn: function(){
        //TODO
    },

    logOut: function(){
        //TODO
    },

    getTimeline: function(){
        //TODO
        odauth();
        request
            .get('https://api.onedrive.com/v1.0/drive/root:/timeline.json:/content')
            .end(function(error, res){
                console.log("FILE", res);
            });

        var data = {
            title: 'moja historia',
            events: [{
                startDate: '21/07/2014',
                endDate: '25/07/2014',
                name: 'Spływ - Kwisa',
                description: 'Szalony kilkudniowy spływ rzekąKwisa',
                people: ['Ja','Maja', 'Marta', 'Arek'],
                gallery: ''
            }]
        };

        Dispatcher.handleApiAction({
            type: ActionTypes.GET_TIMELINE_SUCCESS,
            timeline: data
        });
    }
};

module.exports = OneDriveApi;
