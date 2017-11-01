import React from 'react';
import GamesList from './GamesList';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchGames } from './actions';

class GamesPage extends React.Component {
	componentDidMount(){
		this.props.fetchGames();
	}
	render(){
		return (
			<div>
				<h2>Game List Page For you.</h2>

				<GamesList games={this.props.games} />
			</div>
		);
	}
} 

GamesPage.propTypes = {
	games: PropTypes.array.isRequired,
	fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return{
		games: state.games
	}
}

export default connect(mapStateToProps, {fetchGames})(GamesPage);