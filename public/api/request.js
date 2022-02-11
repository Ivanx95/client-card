
import BadRequestError from "../../shared/errors/BadRequestError.js";
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


function disableCard(cardId,brandId,callBack){
	let bodyObj = {brandId, cardId};
	let body =  JSON.stringify(bodyObj);
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'PUT',
    	body: body,
    	headers: headers
	};

	fetch(`${cardPath}/clients/brand/${brandId}/disable`, options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
	});
}


function getClientsByBrand(callBack, params){
	let {brandId, limit=10, page=0, type = 'CLIENT'} = params;
	fetch(`${cardPath}/clients/brand/${brandId}?limit=${limit}&offset=${page}&type=${type}`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}

//TODO: delete
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



function redeem(brandId, uuid,callBack){

	let body =  JSON.stringify( {brandId:brandId});
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};

	fetch(`/api/transactions/redeem/${uuid}`,options)
	.then((response) => {
		callBack(response);
	});
}

function calculateRedeem(brandId, uuid,callBack, error){

	let body =  JSON.stringify( {brandId:brandId});
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};

	fetch(`/api/transactions/redeem/${uuid}/calculate`,options)
	.then(response => {
		if(response.status==200)
		{
		    return response.json();
		}
		else if(response.status == 401) {
			 throw Error("Permision denied");
		}else{
			throw new BadRequestError("General Service Error", response);
		}
	})
	.then((data) => {
		callBack(data);
	})
	.catch(e=>error(e));

}


function credit(opID, uuid,totalSale,callBack){

	let body =  JSON.stringify( {totalSale:totalSale,brandId:opID});
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
				updateCardTemplate,
				getClientsByBrand, disableCard,
				calculateRedeem, redeem};

 