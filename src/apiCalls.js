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
	.then(response => response.json())
	.catch(error => console.log(error))
}

export const deleteReso = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${+id}`, 
    {
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json'
      },
    })
    .then(response => console.log(response.json()))
    .catch(error => console.log(error))
  }
