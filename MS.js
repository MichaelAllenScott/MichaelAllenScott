function loadPage() {
	window.location.replace('https://michaelallenscott.github.io/Projects/');
}
function downClicked() {
	$('html, body').animate({
			scrollTop: $( $($('#down-anchor')).attr('href') ).offset().top
		}, 700);
}
