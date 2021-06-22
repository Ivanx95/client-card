const path = "/auth";



 function login(body, callBack){


	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};


	fetch(`${path}/loginuser`,options)
	.then(response => callBack(response));
}


export default {login}