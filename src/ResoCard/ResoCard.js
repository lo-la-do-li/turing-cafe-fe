import React from 'react';
import './ResoCard.css'

const ResoCard = ({ id, name, date, time, guests }) => {
	return (
		<div className='reso-card'>
			<h3>{name}</h3>
			<p>Date: {date}</p>
			<p>Time: {time}</p>
			<p>Guests: {guests}</p>
			<button className='delete-btn'>X</button>
		</div>
	)
}

export default ResoCard;
