;(function () {
	window.onload = function () {
	var myNum = 10;
	var myTest = document.getElementById("test");
	var countdown = setInterval(function () {
		if (myNum === 0) {
		   window.close();
	    }
	    myTest.innerHTML = myNum--;
	},1000);
	}
})();