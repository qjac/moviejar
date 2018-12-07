import React from 'react';

import GetButton from './GetButton.js';
import Result from './Result.js';


class GetContainer extends React.Component {
	render() {
		return (
			<section className="get-container">
				<GetButton />
				<Result />
			</section>
		)
	}
}

export default GetContainer;