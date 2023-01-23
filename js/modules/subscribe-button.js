export default function subscribeButton() {
	
	const subscribeBanner = document.querySelector('.subscribe-banner');
	const subscribeButton = document.querySelector('.subscribe-banner__close-icon');

	if(subscribeBanner !== null) {
		subscribeButton.addEventListener('click', removeSubscribeBanner);
	}


   function removeSubscribeBanner(event) {
		subscribeBanner.style.display = 'none';
	}


}