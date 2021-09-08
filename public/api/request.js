
const basePath = "/api";
const cardPath = basePath+"/cards";


function getCards(callBack){
	fetch(cardPath)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}


function getBrands(callBack){
	fetch(basePath+"/brands")
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}

function getCardsByClient(userId,callBack){
	fetch(`${cardPath}/owner/${userId}`)
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


	fetch(`${cardPath}/${uuid}`,options)
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



function getCartdsTemplate(brandId, callBack){
fetch(`${basePath}/card-template/${brandId}`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}




function updateCardTemplate(cardId,body,callBack){

	let strBody = JSON.stringify(body);
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": strBody.length
	});

	const options = {
    	method: 'PATCH',
    	body: strBody,
    	headers: headers
	};


	fetch(`${basePath}/card-template/${cardId}`,options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}

export default {getCards, 
				findCards,
				credit,
				getCardsByClient,
				getBrands,
				getCartdsTemplate,
				updateCardTemplate};

 