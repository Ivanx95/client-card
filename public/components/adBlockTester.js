
let  tester = {
	type:"silent",
	init: function(){
	var check = document.getElementById("adTester");
	  if (check.clientHeight == 0) {
	    alert("ADBLOCK DETECTED!");
	  } else {
	    alert("ADS ALLOWED!");
	    // Optional - Remove the dummy if you want
	    document.body.removeChild(check);
      }
  }
};


export default tester;
