import {writable} from 'svelte/store';

const PollStore = writable ([
    {
		id: 1,
		question: 'In the movie "Spirited Away," what is the name of the young girl who becomes trapped in a magical world?',
		answerA: 'A) Chihiro',
		answerB: 'B) Mei',
		votesA: 19,
		votesB: 5,
	    },
		// {
		// 	id: 1,
		// 	question: 'My Neighbor Totoro" features two sisters who move to the countryside. What is the name of the mysterious forest spirit they encounter?',
		// 	answerA: 'A) No-Face',
		// 	answerB: 'B) Totoro',
		// 	votesA: 9,
		// 	votesB: 15,
		// 	},
]);

export default PollStore;