/**
 * 
 */
$(document).ready(function() {
	$('.btn-primary').click(function() {
		$('#time').toggle();
		document.getElementById('time').innerHTML = Date();
	});

});

var today = new Date();

if (today.getHours() >= 12 && today.getHours() < 17) {
	document.getElementById('demo').innerHTML = "Good Afternoon, Epsilon!";
} else if (today.getHours() > 18 && today.getHours() < 24) {
	document.getElementById('demo').innerHTML = "Good Evening, Epsilon!";
} else {
	document.getElementById('demo').innerHTML = "Good Morning, Epsilon!";
}