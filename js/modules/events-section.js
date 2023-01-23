export default function eventSection() {
	const eventSection = document.querySelector('.event-section');
	const eventsContainer = document.querySelector('.event-section__events');

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
	]

	function createEvent() {
		for (let index = 0; index < events.length; index++) {
			const event = document.createElement('li');
			event.classList.add('event-section__event');

			eventsContainer.appendChild(event);

			const eventCategory = document.createElement('div');
			const eventDate = document.createElement('div');
			const eventName = document.createElement('div');
			
			eventCategory.classList.add('event-section__filter','event-section__filter-lectures');
			eventCategory.innerText = events[index].category;

			eventDate.classList.add('event-section__date');
			eventDate.innerText = events[index].date;

			eventName.classList.add('event-section__name');
			eventName.innerText = events[index].title;

			
			event.appendChild(eventCategory);
			event.appendChild(eventDate);
			event.appendChild(eventName);

			console.log(events.category);
		}
	}
	createEvent();

}
