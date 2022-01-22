export const getCreator = async (id) => {
	try {
		const url = `/api/creators/${id}`;
		const response = await fetch(url, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch(err) {
		return {
			payload: {},
			success: false,
			errorMessage: new Error(error).message,
		};
	}
};