/**


**/

(function(){

	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		today = new Date();
		message = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();

	console.log(message);
}());