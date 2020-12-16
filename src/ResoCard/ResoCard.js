import React from 'react';
import './ResoCard.css'

const ResoCard = ({ id, name, date, time, number }) => {
	return (
		<div className='reso-card'>
			<h3>{name}</h3>
			<p>Date: {date}</p>
			<p>Time: {time}</p>
			<p>Guests: {number}</p>
			<button>X</button>
		</div>
	)
}

export default ResoCard;

// {
//         "id": 1,
//         "name": "Christie",
//         "date": "12/29",
//         "time": "7:00",
//         "number": 12
//     }