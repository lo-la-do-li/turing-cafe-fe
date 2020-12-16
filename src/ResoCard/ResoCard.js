import React from 'react';
import './ResoCard.css'

const ResoCard = ({ id, name, date, time, number }) => {
	return (
		<div className='reso-card'>
			<h3>{name}</h3>
			<p>{date}</p>
			<p>{time}</p>
			<p>{number}</p>
			{/* <button onClick={() => deleteReso(id)}>X</button> */}
		</div>
)
}

export default ResoCard;