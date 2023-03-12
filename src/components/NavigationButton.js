import React from 'react';
import { PageContext } from '../App';

const NavigationButton = ({destination, text}) => {
	const NavButtonStyle = {
		background: 'transparent',
		border: 0,
		fontSize: 24,
		textAlign: 'left',
		paddingLeft: 40,
	}

	const {switchPage} = React.useContext(PageContext);
	return (
		<button style={NavButtonStyle} 
			onClick={() => {
				switchPage({ type: destination });
			}}
		>
			{text}
		</button>
	)
}

export default NavigationButton