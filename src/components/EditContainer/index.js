import React from 'react';

class EditContainer extends React.Component {

	render() {
		const { list } = this.props;

		const movieList = list.movies.map(movie => {
			return <li key={ movie.id }>{ movie.title }</li>	
		});

		return (
			<section className="edit-container">
			
				<div className="list-name">
					<p>Choosing from: </p>
					<h4>{ list.name }</h4>
				</div>
				<button className="edit-list">Edit <em>{ list.name }</em> List</button>

				<div className="movie-list">
					<ol>
						{ movieList }
					</ol>
				</div>
				
			</section>
		)
	}
}

export default EditContainer;