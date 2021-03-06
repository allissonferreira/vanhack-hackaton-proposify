﻿//Modules
var express 		= require('express');
	app 			= express(),
	http 			= require('http').Server(app),
	io 				= require('socket.io')(http),
	realtimeEditor 	= require('realtime-editor');

//App routing
app.get('/', function (req, res) {

	//Folders used in index.html
	app.use("/node_modules", express.static(__dirname + "/node_modules"));
	app.use(express.static(__dirname + '/public'));

	res.sendFile(__dirname + '/public/index.html');
});

//realtimeEditor hook for saving content
//the data object have several properties including a custom property object which can hold your app specific IDs
realtimeEditor.onSave(function (data) {
	console.log('realtimeEditor.onSave: ', data);
});

//Start the server
http.listen(process.env.PORT || 80, function () {
	console.log('listening on *:80');
});