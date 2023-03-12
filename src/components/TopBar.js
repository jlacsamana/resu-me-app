import React from 'react';

export const TopBarHeight = 50

const TopBar = () => {
	const TopBarTheme = {
        backgroundColor: 'white',
		position: 'absolute',
		top: 0,
		left: 0,
        height: TopBarHeight,
        width: '100%',
        boxShadow: '1px 2px 10px #ccc',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
	}

    const HeaderStyle = {
        margin: 0, 
        paddingLeft: '3%',
        color: 'rgb(35, 105, 10)',
    }

    const SloganStyle = {
        margin: 0, 
        paddingLeft: 30,
        fontFamily: 'Comic Sans MS',
        fontSize: 20,
        marginBottom: 5,
        paddingRight: '20%',
    }

	return (
		<div style={TopBarTheme}>
			<h1 style={HeaderStyle}>ResuMe</h1>
            <p style={SloganStyle}>Forget SCOPE, use ResuMe!</p>
		</div>
	)
}

export default TopBar