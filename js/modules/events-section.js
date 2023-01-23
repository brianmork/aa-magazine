export default function eventSection() {
	const eventsContainer = document.querySelector('.event-section__events');
	const filterButtons = document.querySelectorAll('.event-section__filter-buttons');

	/**
	 * @todo if past todays date, remove from site
	 */

	
	const events = [
		{
			category: 'lectures',
			date: 'january 20 12:00-14:00',
			title: 'Conversations: Sami Sami sacred mountains and sacrificial stones',
		},
		{
			category: 'exhibitions',
			date: 'february 5 16:00-17:00',
			title: 'Free guided tour in Kunna Guanne Concha',
		},
		{
			category: 'exhibitions',
			date: 'feburary 12 18:00',
			title: 'Exhibition opening: Metahaven and Susanne M.Winterling',
		},
		{
			category: 'open seminars',
			date: 'march 4 18:00-20:00',
			title: 'Monumental love - Art historian Marit Paasche on Hannah Ryggen',
		},
		{
			category: 'lectures',
			date: 'january 20 12:00-14:00',
			title: 'Conversations: Sami Sami sacred mountains and sacrificial stones',
		},
		{
			category: 'exhibitions',
			date: 'february 5 16:00-17:00',
			title: 'Free guided tour in Kunna Guanne Concha',
		},
		{
			category: 'exhibitions',
			date: 'feburary 12 18:00',
			title: 'Exhibition opening: Metahaven and Susanne M.Winterling',
		},
		{
			category: 'open seminars',
			date: 'march 4 18:00-20:00',
			title: 'Monumental love - Art historian Marit Paasche on Hannah Ryggen',
		},
		{
			category: 'lectures',
			date: 'january 20 12:00-14:00',
			title: 'Conversations: Sami Sami sacred mountains and sacrificial stones',
		},
		{
			category: 'exhibitions',
			date: 'february 5 16:00-17:00',
			title: 'Free guided tour in Kunna Guanne Concha',
		},
		{
			category: 'exhibitions',
			date: 'feburary 12 18:00',
			title: 'Exhibition opening: Metahaven and Susanne M.Winterling',
		},
		{
			category: 'open seminars',
			date: 'march 4 18:00-20:00',
			title: 'Monumental love - Art historian Marit Paasche on Hannah Ryggen',
		},
	];

	window.onload = createEvents(events)

	filterButtons.forEach((filterButton) => {
		filterButton.addEventListener('click', handleFilterButtonClick)
	});

	function handleFilterButtonClick(event) {
		filterEvents(event);
	}

	function filterEvents(event) {
		if (event.target.id === 'lectures') {
			let filteredEvents = events.filter(function(events) {
				return events.category == 'lectures';
			});
			createEvents(filteredEvents)
		} else if (event.target.id === 'exhibitions') {
			let filteredEvents = events.filter(function(events) {
				return events.category == 'exhibitions';
			});
			createEvents(filteredEvents)
		} else if (event.target.id === 'open-seminars') {
			let filteredEvents = events.filter(function(events) {
				return events.category == 'open seminars';
			});
			createEvents(filteredEvents)
		}
	}

	function createEvents(array) {
		eventsContainer.innerHTML = '';
		for (let index = 0; index < array.length; index++) {
			
			const event = document.createElement('li');
			event.classList.add('event-section__event');

			eventsContainer.appendChild(event);

			const eventCategory = document.createElement('div');
			const eventDate = document.createElement('div');
			const eventName = document.createElement('div');
			
			eventCategory.classList.add('event-section__filter','event-section__filter-lectures');
			eventCategory.innerText = array[index].category;

			eventDate.classList.add('event-section__date');
			eventDate.innerText = array[index].date;

			eventName.classList.add('event-section__name');
			eventName.innerText = array[index].title;

			
			event.appendChild(eventCategory);
			event.appendChild(eventDate);
			event.appendChild(eventName);
		}
	}
}
