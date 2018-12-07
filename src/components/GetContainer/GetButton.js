import React from 'react';

const GetButton = props => {
	return (
      <button className="get-button" onClick={ props.handleClick }>Get your movie!</button>
    );
}

export default GetButton;