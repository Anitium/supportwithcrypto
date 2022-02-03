import { getAuthKey } from '../../utils/auth';
import { getItem } from '../../utils/storage';

export const getCreator = async (id) => {
	try {
		const url = `/api/creators/${id}`;
		const response = await fetch(url, {
			method: 'GET',
		});
		return await response.json();
	} catch(err) {
		return {
			payload: {},
			success: false,
			errorMessage: new Error(err).message,
		};
	}
};

export const updateCreator = async (data) => {
	try {
    const key = getAuthKey('swc');
    const item = getItem(key);
    data.auth = item;

		console.log('sending creator data:', data);
		const response = await fetch('/api/creators', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},      
			body: JSON.stringify(data),
		});
		return await response.json();
	} catch(err) {
		return {
			payload: {},
			success: false,
			errorMessage: new Error(err).message,
		};
	}
};
