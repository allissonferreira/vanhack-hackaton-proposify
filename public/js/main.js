//Start the first editor
//Main variables
var socket 		= io.connect(),
	editorArray = [];

//Function to create multiple editors (A.K.A document pages)
	//Had no time to continue doing this section, or even do some security coding
	//I hope that only one editor would be enough :)
function addEditor(){
	var editorId 	= editorArray.length+1;
	var editor 		= new Editor('editor'+editorId, 2, 'vanhack-hackathon', [], {referenceId: editorId+'1', componentId: editorId+'2'});
	var editorObj 	= editor.create();
	editorArray.push(editorObj);

	//For test purposes
	console.log('editorObj', editorObj);
}

//Create our first page
addEditor();