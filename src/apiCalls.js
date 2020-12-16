export const fetchAllResos = () => {
	return fetch('http://localhost:3001/api/v1/reservations')
		.then(response => response.json())
		.catch(error => console.log(error))
}

export const postNewReso = (name, date, time, number) => {
	return fetch('http://localhost:3001/api/v1/reservations', 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			date: date,
			time: time, 
			number: +number,
		})
	})
	.then(response => response.json()).catch(error => console.log(error))
}