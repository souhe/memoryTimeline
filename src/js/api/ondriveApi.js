var Dispatcher = require('../dispatchers/memoryTimelineDispatcher.js');
var ActionTypes = require('../constants/actionTypes.js');
var request = require('superagent');
var ApiActionCreators = require('../actions/apiActionCreators.js');
var hello = require('../../../bower_components/hello/dist/hello.all.js');
var AccountStore = require('../stores/accountStore.js');

var OneDriveApi = {
    isOnline : function(session){
    	var current_time = (new Date()).getTime() / 1000;
    	return session && session.access_token && session.expires > current_time;
    },

    initAuthentication: function(){
        hello.init({
            windows  : '0000000040149208'
        },{redirect_uri:'http://memorytimeline.lunet123.pl/redirect.html'});
        var session = hello('windows').getAuthResponse();

        if(this.isOnline(session)){
            //TODO: move to function
            hello( session.network ).api( '/me' ).then( function(p){
                var account = {
                    token: session.access_token,
                    name: p.name,
                    photo: p.thumbnail
                };
                ApiActionCreators.loggedIn(account);
        	});
        }
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
                    photo: p.thumbnail
                };
                ApiActionCreators.loggedIn(account);
        	});
        }, function(err){
            console.log("ERROR", err)
        });
    },

    logOut: function(){
        hello('windows').logout().then(function(r){
            ApiActionCreators.loggedOut();
        })
    },

    getTimeline: function(){
        var token = AccountStore.getToken();
        request
            .get('https://api.onedrive.com/v1.0/drive/root:/timeline.json:/content')
            .withCredentials()
            .set('Authorization', 'bearer ' + token)
            .set('Access-Control-Allow-Credentials', 'true')
            .set('Accept', 'application/json')
            .end(function(error, res){
                console.log("FILE", res.body);
                ApiActionCreators.getTimelineSuccess(res.body);
            });
    }
};

module.exports = OneDriveApi;
