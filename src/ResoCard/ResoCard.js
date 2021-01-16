import React from 'react';
import './ResoCard.css'

const ResoCard = ({ id, name, date, time, number, removeDeletedReso }) => {
	
	return (
		<div className='reso-card'>
			<h3>{name}</h3>
				<p><b>Date:</b> {date}</p>
				<p><b>Time:</b> {time}</p>
				<p><b>Number:</b> {number}</p>
			<button className='delete-btn' onClick={() => removeDeletedReso(id)}>CANCEL</button>
		</div>
	)
}

export default ResoCard;
