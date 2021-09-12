const path = "/auth";

	


function validate(email, callback){
	fetch(`${path}/validate/${email}`)
	.then(response => callback(response));
}


function createFormLoginOptions(body){

	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
		method: 'POST',
		body: body,
		headers: headers
	};
	return options;
}

function login(body, callBack){

 	const options = createFormLoginOptions(body);
	fetch(`${path}/loginuser`,options)
	.then(response => callBack(response));
}

function sigIn(body, callBack){

	const options = createFormLoginOptions(body);

	fetch(`${path}/signup`,options)
	.then(response => callBack(response));
}



export default {login, sigIn,validate};