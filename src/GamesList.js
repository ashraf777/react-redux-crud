import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({ games }) {
	const emptyMessage = (
		<p>There are no games yet in your collection.</p>
	);

	const gamesList = (
		<p>Games list.</p>
	);	

	return(
		<div>
			{games.length === 0 ? emptyMessage : gamesList}
		</div>
	);
}

GamesList.propsTypes = {
	games: PropTypes.array.isRequired
}