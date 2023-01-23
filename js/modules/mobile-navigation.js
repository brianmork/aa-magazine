export default function mobileNavigation() {
	let menuVisible = false;

	const menu = document.querySelector('.navigation__menu-container');
	const menuItems = document.querySelectorAll('.navigation__mobile-menu-item');
	const hamburgerIcon = document.querySelector('.header__burger-menu');
	const closeIcon = document.querySelector('.navigation__close-icon');

	if(hamburgerIcon !== null) {
		hamburgerIcon.addEventListener('click', handleHamburgerIconClick);
	};

	if(closeIcon !== null) {
		closeIcon.addEventListener('click', handleCloseIconClick);
	}

	function handleHamburgerIconClick() {
		toggleMenu();
	}

	function handleCloseIconClick() {
		toggleMenu();
	}

	function toggleMenu() {
		menuVisible = !menuVisible;
		if (!menuVisible) {
			menu.style.display = 'none'
			hamburgerIcon.style.display = 'inline';
			closeIcon.style.display = 'none'
		} else {
			menu.style.display = 'block';
			hamburgerIcon.style.display = 'none';
			closeIcon.style.display = 'inline'
		}

		if (window.innerWidth < 768) {
			for (let index = 0; index < menuItems.length; index +=1) {
				menuItems[index].addEventListener('click', toggleMenu);
			};
		}
	}
}