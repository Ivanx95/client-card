
const path = "/api/cards";


function getCards(callBack){
	fetch(path)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}


function findCards(uuid,opID,callBack){

	let body =  JSON.stringify( {operatorID:opID});
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};


	fetch(`${path}/${uuid}`,options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}



function credit(opID, uuid,totalSale,callBack){

	let body =  JSON.stringify( {totalSale:totalSale,operatorID:opID});
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};

	fetch(`/api/transactions/credit/${uuid}`,options)
	.then(response => response.json())
	.then((data) => {
		callBack(data);
	});
}



export default {getCards, findCards,credit};

 