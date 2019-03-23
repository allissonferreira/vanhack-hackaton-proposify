//Main class
class Editor {
	constructor(id, projectId, room, text, custom){
		this.id 		= id;
		this.projectId	= projectId;
		this.room 		= room;
		this.text 		= text;
		this.custom 	= custom;
	}

	create(obj){
		//For test purposes
		console.log('New instance: ', this);

		let _obj = new realtimeEditor(this);
		this.instance = _obj;

		return this.instance;
	}

	//get and set functions
}