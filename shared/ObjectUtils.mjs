function getProperty(path, model){
	let paths  = path.split(".");
	return getNestedProperty(0, paths, model);

}
function getNestedProperty(index, paths, model){
	if(!model){
		return;
	}
	if(index>=paths.length){
		return model;
	}

	let property  = model[paths[index]];
	index++;
	return getNestedProperty(index, paths, property);
}


export default getProperty;