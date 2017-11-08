import React from 'react';
import GamesList from './GamesList';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchGames, deleteGame } from './actions';

class GamesPage extends React.Component {
	componentDidMount(){
		this.props.fetchGames();
	}
	render(){
		return (
			<div>
				<h2>Game List Page.</h2>

				<GamesList games={this.props.games} deleteGame={this.props.deleteGame} />
			</div>
		);
	}
} 

GamesPage.propTypes = {
	games: PropTypes.array.isRequired,
	fetchGames: PropTypes.func.isRequired,
	deleteGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return{
		games: state.games
	}
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);