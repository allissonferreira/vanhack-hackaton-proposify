// Modules
var express = require('express');
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	realtimeEditor = require('realtime-editor');	

app.use(express.static('public'));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

// App routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// realtimeEditor hook for saving content
// the data object have several properties including a custom property object which can hold your app specific IDs
realtimeEditor.onSave(function (data) {
	console.log('realtimeEditor.onSave: ', data);
});


http.listen(2000, function () {
	console.log('listening on *:2000');
});