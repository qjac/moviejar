import React from 'react';

import GetButton from './GetButton.js';
import Result from './Result.js';


class GetContainer extends React.Component {
constructor(props) {
	super(props);
	const { list } = this.props;
	this.handleClick = this.handleClick.bind(this);

	this.state = {};
}

handleClick(event) {
	event.preventDefault();

	const movies = this.props.list.movies;
	const selectedMovie = movies[Math.floor(Math.random()*movies.length)];

	this.setState(state => ({
       selectedMovie
    }));
}

	render(list) {
		return (
			<section className="get-container">
				<Result list={ list } />
				<GetButton 
				list={ list } 
				handleClick={ this.handleClick }/>
			</section>
		)
	}
}

export default GetContainer;