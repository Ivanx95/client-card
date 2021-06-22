export default function handleError(error){
	let errorContainer = document.createElement("div");

	let errorBanner = document.createElement("p");;
	errorBanner.innerHTML ="Something went wrong";
	errorBanner.className = ["danger"];

	let errorMsg = document.createElement("p");
	errorMsg.innerHTML = error;
	
	errorContainer.appendChild(errorBanner);
	errorContainer.appendChild(errorMsg);

	document.getElementsByTagName("body")[0].appendChild(errorContainer);

}