import FloatDoodle from './media/FloatDoodle.svg';
import IceCreamDoodle from './media/IceCreamDoodle.svg';
import PlantDoodle from './media/PlantDoodle.svg';
import SwingingDoodle from './media/SwingingDoodle.svg';
import SprintingDoodle from './media/SprintingDoodle.svg';
import MeditatingDoodle from './media/MeditatingDoodle.svg';
import videoMessage from './media/msg.mov';
import bananaPancakes from './media/bananapancakes2.mov';
import albumcover from './media/albumcover.png';
import sarahphoto from './media/sarahphoto.jpg';

const cards = [
	{
		name: 'message',
		header: 'Dear Sarah, happy birthday!',
		message:
			'We\'re wishing you a birthday with lots of love and happy, joyful moments!  We\'ve put together a few to get started 🥳...',
		image: FloatDoodle,
	},
	{
		name: 'quotes',
		header: 'Look at this star',
		message: null,
		image: IceCreamDoodle,
		photo: true,
		cover: sarahphoto
	},
	{
		name: 'vid-song',
		header: 'A special performance from two musicians in NYC (pick-a-song.com)',
		message: null,
		image: PlantDoodle,
		video: bananaPancakes
	},
	{
		name: 'vid-message',
		header: 'Hello from Mom and Dad!',
		message: null,
		image: SwingingDoodle,
		video: videoMessage
	},
	{
		name: 'photos',
		header: 'Childhood gems',
		message: 'Click for an album!',
		image: MeditatingDoodle,
		photo: 'https://photos.app.goo.gl/cRngaehrafmCKGEdA',
		cover: albumcover
	},
	{
		name: 'other',
		header: 'Enjoy your birthday, Sarah!',
		message: null,
		image: SprintingDoodle,
		video: true,
		youtube: 'https://www.youtube.com/embed/df8IA9qg6T4'
	},
];

export default cards;
