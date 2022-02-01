export const getRate = async (symbol) => {
	try {
		const url = `/api/exchange/${symbol}`;
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