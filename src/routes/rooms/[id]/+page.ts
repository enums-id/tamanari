import content from '../../../lib/data/content.json';

export const entries = () => {
	return content.rooms.map((room) => ({ id: room.id }));
};
