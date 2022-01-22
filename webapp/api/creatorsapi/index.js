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
			errorMessage: new Error(error).message,
		};
	}
};

export const updateCreator = async (data) => {
	try {
		console.log(data);
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
			errorMessage: new Error(error).message,
		};
	}
};