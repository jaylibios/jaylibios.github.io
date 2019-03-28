// When the event DOMContentLoaded occurs
// it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {
	//get navbar
	const nav = document.getElementById("navigation");
	//offset position of navbar
	const navTop = nav.offsetTop;

	const stickyNav = () => {
		if(window.scrollY >= navTop) {
			nav.classList.add('fixed');
		} else {
			nav.classList.remove('fixed');
		}
	};

	window.addEventListener('scroll', stickyNav);

})