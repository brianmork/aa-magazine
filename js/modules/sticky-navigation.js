export default function stickyNavigation() {
	const navbar = document.querySelector('.navigation__mobile');
	const main = document.querySelector('main');
	
	let sticky = navbar.offsetTop - 20;
	
	if(navbar !== null && window.innerWidth < 992) {
		window.addEventListener('scroll', handleNavbarScroll);
	}

	function handleNavbarScroll(event) {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("navigation__mobile-sticky")
			main.classList.add('navbar-offset-margin');
		 } else {
			navbar.classList.remove("navigation__mobile-sticky");
			main.classList.remove('navbar-offset-margin');
		 }
	}

}
