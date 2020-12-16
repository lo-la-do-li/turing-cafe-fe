import React from 'react';
import ResoCard from '../ResoCard/ResoCard';
import './ResoContainer.css';

const ResoContainer = ({ reservations }) => {

	const resoCards = reservations.map(reso => {
		return(
			<ResoCard
					id={reso.id}
					name={reso.name}
					date={reso.date}
					time={reso.time}
					numberGuests={reso.number}
					key={reso.id}
			/>
		);
	})

	return(
		<section className='reso-container'>
			{resoCards}
		</section>
	)
}

// {
//         "id": 1,
//         "name": "Christie",
//         "date": "12/29",
//         "time": "7:00",
//         "number": 12
//     }

export default ResoContainer;