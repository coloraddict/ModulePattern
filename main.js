var Counter = (function() {
	
	let curr_count = 0;

	function incrementCounter(count=1){
		curr_count+=parseInt(count);
	}

	function resetCounter(){
		curr_count=0;
	}

	function getCount(){
		return curr_count;
	}
	
	return {
		incrementCounter: incrementCounter,
		resetCounter: resetCounter,
		getCount: getCount
	}

})();