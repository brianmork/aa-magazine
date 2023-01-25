export default function searchMobile() {
	let searchVisible = false;


	const searchContent = document.querySelector(".search__icon-content");

	const searchIcon = document.querySelector('.header__search-icon');

	if(searchIcon !== null) {
		searchIcon.addEventListener('click', handleSearchContentClick)
	}

	function handleSearchContentClick(event) {
		toggleSearchInput();
		renderHTML();
	}

	function toggleSearchInput() {
		searchVisible = !searchVisible; 
	}

	function renderHTML() {
		if (searchVisible === true) {
			searchContent.style.transform = 'scaleX(1)';
		} else {
			searchContent.style.transform = 'scaleX(0)';
		}
	
	}

}