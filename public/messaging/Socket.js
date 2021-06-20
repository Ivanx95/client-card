const WebSocketInstance = (function (){
	var instance;

	function createInstance(){
		var object = io();
		return object;
	}

	return {
		getInstance : function(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	}
})();


export default WebSocketInstance;