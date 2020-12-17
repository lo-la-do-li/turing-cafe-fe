import React from 'react';
import './ResoCard.css'

const ResoCard = ({ id, name, date, time, number, removeDeletedReso }) => {
	
	return (
		<div className='reso-card'>
			<h3>{name}</h3>
				<p>Date: {date}</p>
				<p>Time: {time}</p>
				<p>Number: {number}</p>
			<button className='delete-btn' onClick={() => removeDeletedReso(id)}>X</button>
		</div>
	)
}

export default ResoCard;
