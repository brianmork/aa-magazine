export default function stickyNavigation() {
	
	const navbar = document.querySelector('.navigation__mobile');
	let sticky = navbar.offsetTop;

	window.addEventListener('scroll', handleNavbarScroll);

	function handleNavbarScroll() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("navigation__mobile-sticky")
		 } else {
			navbar.classList.remove("navigation__mobile-sticky");
		 }
	}
}
