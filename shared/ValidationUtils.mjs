
/**
Curry validation 
e.g. validate([],obj, fun1)(func2)(func3,1)
**/
function _validate(entity, errors=[]){
	console.log(JSON.stringify(entity));
	const f = (toVal, finish)=>{
	 	  let error = toVal(entity);
		  if(error){
	         errors.push(error);
		  }
		  if(finish){
		      return errors
		  }else{
		  	return f;
		  }
		}
	return f;
}


export default _validate;