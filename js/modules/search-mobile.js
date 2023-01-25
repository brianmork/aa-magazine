export default function searchMobile() {
	let searchVisible = false;

	const searchIconInput = document.querySelector('.search__icon-input');
	const searchIcon = document.querySelector('.header__search-icon');

	if(searchIcon !== null) {
		searchIcon.addEventListener('click', handleSearchIconClick);
	}

	function handleSearchIconClick(event) {
		toggleSearchInput();
		renderHTML();
	}

	function toggleSearchInput() {
		searchVisible = !searchVisible; 
	}

	function renderHTML() {
		if (searchVisible === true) {
			searchIconInput.classList.add('search__input--visible')
		} else {
			searchIconInput.classList.remove('search__input--visible');
		}
	}
}