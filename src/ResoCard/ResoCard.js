import React from 'react';
import './ResoCard.css'

const ResoCard = ({ id, name, date, time, numberGuests }) => {
	return (
		<div className='reso-card'>
			<h3>{name}</h3>
			<p>{date}</p>
			<p>{time}</p>
			<p>{numberGuests}</p>
			{/* <button onClick={() => deleteReso(id)}>X</button> */}
		</div>
)
}

export default ResoCard;