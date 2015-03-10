var Dispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js');
var request = require('superagent');
var ApiActionCreators = require('../actions/apiActionCreators.js');
var hello = require('../../../bower_components/hello/dist/hello.all.js');

var OneDriveApi = {

    initAuthentication: function(){
        hello.init({
            windows  : '0000000040149208'
        },{redirect_uri:'http://memorytimeline.lunet123.pl/redirect.html'});
    },

    logInAndGetProfile: function(){
        hello('windows').login({scope: 'wl.skydrive'}).then(function(r){
            var token = hello('windows').getAuthResponse().access_token;
            var account = {
                token: token
            };

            hello( r.network ).api( '/me' ).then( function(p){
                var account = {
                    token: token,
                    name: p.name,
                    photo: p.thumnibal
                };
                ApiActionCreators.loggedIn(account);
        	});
        }, function(err){
            console.log("ERROR", err)
        });
    },

    logOut: function(){
        //TODO
    },

    getTimeline: function(){
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

        ApiActionCreators.getTimelineSuccess(data);
    }
};

module.exports = OneDriveApi;
