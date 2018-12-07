import React from 'react';

const Result = props => {
	const { selectedMovie } = props;

	return (
		(selectedMovie) ? <h2 className="result">{ selectedMovie.title }</h2> : <h2 className="result"> </h2>
	  );
}

export default Result;