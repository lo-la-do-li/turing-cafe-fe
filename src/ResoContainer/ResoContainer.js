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
					guests={reso.number}
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

export default ResoContainer;