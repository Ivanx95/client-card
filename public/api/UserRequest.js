



const basePath = "/api";
const user_endpoint_path = basePath+"/users";


function getInfo(callBack){
	fetch(user_endpoint_path+"/info")
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}




export default {getInfo};

