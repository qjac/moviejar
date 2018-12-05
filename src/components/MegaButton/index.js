import React, { Component } from 'react';

import MegaButton from './MegaButton.js';
import MegaResult from './Result.js';


class MegaButtonContainer extends Component {
	render() {
		return (
			<section>
				<MegaButton />
				<MegaResult />
			</section>
		)
	}
}

export default MegaButtonContainer;